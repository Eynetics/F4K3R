/**
 * F4K3R: die deutsche Schicht der Konsole.
 *
 * Die Konsole schreibt ihre Texte auf Englisch. Statt jede Ansicht umzuschreiben (was jedes Upstream-Update zum Konflikt
 * machen würde), übersetzt diese Schicht an der einen Stelle, durch die jeder sichtbare Text läuft: das Render-Kit
 * (Text, Button, Input). Was das Wörterbuch nicht kennt, bleibt Englisch; es geht also nie etwas kaputt.
 *
 * Sprache: Umgebungsvariable F4K3R_LANG (`de` ist der Standard, `en` schaltet die Übersetzung ab).
 *
 * Reihenfolge je Text:
 *   1. ganzer Satz (EXACT), Leerraum am Rand bleibt erhalten
 *   2. abgeschnittener Satz ("… am Ende"): passender Eintrag, auf dieselbe Länge gekürzt
 *   3. einzelne Begriffe (PHRASES) innerhalb eines Textes, nur an Wortgrenzen und nie in Pfaden, Befehlen oder Code
 */
import type { Kit } from '../views/common'
import { EXACT, PHRASES, SECTION } from './de'

const lang = (): string => {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env

  return (env?.F4K3R_LANG ?? 'de').toLowerCase()
}

export const isGerman = (): boolean => lang() !== 'en'

// Groß geschriebene Überschriften (SETTINGS, PLUGIN OPTIONS) bekommen ihre Übersetzung automatisch mit.
const exact = new Map<string, string>()

for (const [en, de] of Object.entries(EXACT)) {
  exact.set(en, de)
  if (!exact.has(en.toUpperCase())) exact.set(en.toUpperCase(), de.toUpperCase())
}

const keys = [...exact.keys()].sort((a, b) => a.length - b.length)

// Begriffe: längste zuerst, damit "Main Menu" vor "Menu" greift. Grenzen: kein Buchstabe, keine Ziffer und kein Zeichen,
// das auf einen Befehl, Pfad oder Bezeichner deutet (/ - _ . ` @ : =) direkt davor oder danach.
const BEFORE = '(?<![\\p{L}\\p{N}_/`@.=:-])'
const AFTER = '(?![\\p{L}\\p{N}_/`@=-])'
const escape = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const phrases: { re: RegExp; de: string }[] = []

for (const [en, de] of [...PHRASES].sort((a, b) => b[0].length - a[0].length)) {
  phrases.push({ re: new RegExp(`${BEFORE}${escape(en)}${AFTER}`, 'gu'), de })
  if (en.toUpperCase() !== en) phrases.push({ re: new RegExp(`${BEFORE}${escape(en.toUpperCase())}${AFTER}`, 'gu'), de: de.toUpperCase() })
}

const clipTo = (text: string, width: number): string => (text.length <= width ? text : `${text.slice(0, Math.max(0, width - 1))}…`)

const cache = new Map<string, string>()
const CACHE_MAX = 8000

function translateCore(core: string): string {
  const whole = exact.get(core)

  if (whole !== undefined) return whole

  // Abgeschnitten: die Konsole kürzt erst und zeichnet dann. Der längste Eintrag, mit dem der Stumpf beginnt, ist gemeint.
  if (core.length > 6 && core.endsWith('…')) {
    const stem = core.slice(0, -1)
    const key = keys.find(candidate => candidate.length > stem.length && candidate.startsWith(stem))

    if (key !== undefined) return clipTo(exact.get(key) ?? key, core.length)
  }

  // Abschnittslinie im Menü: "── start here ─────"
  const rule = /^(─+ )(.+?)( ─+)$/.exec(core)

  if (rule !== null && rule[2] !== undefined && SECTION[rule[2]] !== undefined) return `${rule[1]}${SECTION[rule[2]]}${rule[3]}`

  // Zeilen mit Füllpunkten ("Swarm topology .......") oder einem Zusatz in Klammern ("…  (swarm.maxAgents)"):
  // den Namen davor übersetzen, den Rest stehen lassen.
  const tail = /^(.+?)( \.{2,}.*| ?\.{3,}.*|\s{2,}\(.*\))$/s.exec(core)

  if (tail !== null && tail[1] !== undefined && exact.has(tail[1].trim())) return `${exact.get(tail[1].trim())}${tail[2] ?? ''}`

  let out = core

  for (const { re, de } of phrases) {
    re.lastIndex = 0
    if (re.test(out)) {
      re.lastIndex = 0
      out = out.replace(re, de)
    }
  }

  return out
}

/** Ein Text auf Deutsch, soweit das Wörterbuch reicht; sonst unverändert. */
export function t(text: string): string {
  if (!isGerman() || text.length === 0 || !/[A-Za-z]/.test(text)) return text

  const hit = cache.get(text)

  if (hit !== undefined) return hit

  const match = /^(\s*)([\s\S]*?)(\s*)$/.exec(text)
  const [lead, core, trail] = match === null ? ['', text, ''] : [match[1] ?? '', match[2] ?? '', match[3] ?? '']
  const out = `${lead}${translateCore(core)}${trail}`

  if (cache.size >= CACHE_MAX) cache.clear()
  cache.set(text, out)

  return out
}

const tr = (value: unknown): unknown => (typeof value === 'string' ? t(value) : Array.isArray(value) ? value.map(tr) : value)

/** Hängt die Übersetzung in das Render-Kit: Text-Inhalt, Button-Beschriftung und die Texte eines Eingabefelds. */
export function withGerman<K extends Kit>(kit: K): K {
  if (!isGerman()) return kit

  const { Text, Button, Input } = kit

  return {
    ...kit,
    Text: ((props: Parameters<typeof Text>[0]) => Text({ ...props, children: tr(props.children) } as Parameters<typeof Text>[0])) as typeof Text,
    Button: ((props: Parameters<typeof Button>[0]) =>
      Button({ ...props, ...(typeof props.label === 'string' && { label: t(props.label) }) } as Parameters<typeof Button>[0])) as typeof Button,
    ...(Input !== undefined && {
      Input: ((props: Parameters<NonNullable<typeof Input>>[0]) => {
        const p = props as Record<string, unknown>
        const next: Record<string, unknown> = { ...p }

        for (const field of ['placeholder', 'label', 'submitLabel', 'hint']) if (typeof p[field] === 'string') next[field] = t(p[field] as string)

        return Input(next as Parameters<NonNullable<typeof Input>>[0])
      }) as NonNullable<typeof Input>,
    }),
  }
}
