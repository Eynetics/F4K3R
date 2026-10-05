/**
 * F4K3R: das deutsche Wörterbuch der Konsole.
 *
 * EXACT   ganze Texte, so wie die Konsole sie zeichnet (ohne Leerraum am Rand). Großschreibung wird automatisch ergänzt.
 * PHRASES einzelne Begriffe, die innerhalb längerer Texte ersetzt werden (Seitennamen, Knöpfe, Gruppen).
 *
 * Neue Einträge: einfach ergänzen. Ein Text, der hier fehlt, bleibt Englisch.
 */
export const EXACT: Record<string, string> = {
  // Seiten und Menü
  'Main Menu': 'Hauptmenü',
  'start here': 'hier starten',
  coordinate: 'koordinieren',
  learn: 'lernen',
  remember: 'erinnern',
  protect: 'schützen',
  observe: 'beobachten',
  network: 'Netzwerk',
  extend: 'erweitern',
  tools: 'Werkzeuge',
  'a key or a name, then Enter · ? for help': 'eine Taste oder einen Namen, dann Enter · ? für Hilfe',
  '▸ collapse all': '▸ alle zuklappen',
  '▾ expand all': '▾ alle aufklappen',
  Registered: 'Registriert',
  Unregistered: 'Nicht registriert',
  'find a page': 'Seite suchen',
  go: 'los',


  // Hauptmenü: Mission Control und Kopfzeilen
  '▓▒░ MISSION CONTROL ░▒▓': '▓▒░ MISSIONSZENTRALE ░▒▓',
  '(1) open Missions': '(1) Missionen öffnen',
  'what do you want done? e.g. add a dark mode toggle to settings': 'was soll erledigt werden? z. B. einen Dunkelmodus-Schalter in den Einstellungen ergänzen',
  'what should get done? e.g. add a dark mode toggle to settings (Enter plans it)': 'was soll erledigt werden? z. B. einen Dunkelmodus-Schalter in den Einstellungen ergänzen (Enter plant es)',
  'a new goal, planned in place of this one': 'ein neues Ziel, das dieses ersetzt',
  'research → create (ADRs, SOP) → build → test → validate → secure → benchmark → learn': 'recherchieren → erstellen (ADRs, SOP) → bauen → testen → prüfen → absichern → messen → lernen',
  'goal → SPARC plan → tasks → Claude': 'Ziel → SPARC-Plan → Aufgaben → Claude',
  goal: 'Ziel',
  '✎ goal': '✎ Ziel',
  plan: 'planen',
  groups: 'Gruppen',
  'NETWORKS:': 'NETZWERKE:',
  '▶ run next': '▶ nächste ausführen',
  '▶ resume': '▶ fortsetzen',
  '⏸ pause': '⏸ pausieren',
  'x.ruv.io Board': 'x.ruv.io-Brett',

  // Fußzeile und Statuszeile
  'keys on': 'Tasten an',
  'keys off': 'Tasten aus',
  'keys off: click the pane (or /ruflo …)': 'Tasten aus: ins Fenster klicken (oder /ruflo …)',
  'reading…': 'lese…',
  '[DIALING…]': '[WÄHLE…]',
  'RUFLO AGENT SWARM CONSOLE · loading…': 'RUFLO AGENTEN-SCHWARM-KONSOLE · lädt…',
  'AGENTS WELCOME.': 'AGENTEN WILLKOMMEN.',

  // Bestätigungen
  '▶ CONFIRM NEEDED — click Yes or press y': '▶ BESTÄTIGUNG NÖTIG — auf Ja klicken oder y drücken',
  'Yes, run it (y)': 'Ja, ausführen (y)',
  'Cancel (n)': 'Abbrechen (n)',
  'Always accept AI turns': 'KI-Züge immer annehmen',

  // Einstellungen
  'simple shows the few that matter · search finds any setting in either level': 'Einfach zeigt nur das Wichtigste · die Suche findet jede Einstellung in beiden Stufen',
  'advanced shows every option of the plugin you pick': 'Erweitert zeigt jede Option des gewählten Plugins',
  'every setting, in every plugin: a name, an option, a word (Enter applies)': 'jede Einstellung in jedem Plugin: ein Name, eine Option, ein Wort (Enter übernimmt)',
  'nothing matches: try one word, or clear the search': 'nichts gefunden: ein einzelnes Wort versuchen oder die Suche leeren',
  'reading its options…': 'lese Optionen…',
  'not read yet': 'noch nicht gelesen',
  'hidden: set it in /plugin configure': 'verborgen: in /plugin configure einstellen',
  'Plugin options': 'Plugin-Optionen',
  'ruflo config': 'ruflo-Konfiguration',
  'ruflo config get / set': 'ruflo config get / set',
  'AI terminal': 'KI-Terminal',
  'AI Terminal': 'KI-Terminal',
  'claude -p and codex exec: saved here, applied to the next turn': 'claude -p und codex exec: hier gespeichert, gilt ab dem nächsten Zug',
  'Remembered actions': 'Gemerkte Aktionen',
  Interface: 'Oberfläche',
  'Navigation style': 'Navigationsstil',
  Updates: 'Updates',
  'a number': 'eine Zahl',
  'a value': 'ein Wert',
  'always accept': 'immer annehmen',
  'ask each time': 'jedes Mal fragen',
  'default ask': 'Standard: fragen',
  'default auto': 'Standard: auto',
  'forget all (ask every time again)': 'alles vergessen (wieder jedes Mal fragen)',
  '↻ check for an update now': '↻ jetzt nach Update suchen',
  '↻ read again': '↻ neu einlesen',
  '✎ search': '✎ Suche',
  '✕ forget': '✕ vergessen',
  'the console’s main nav': 'die Hauptnavigation der Konsole',
  'the console’s update check': 'die Update-Prüfung der Konsole',
  'the main nav': 'die Hauptnavigation',

  // Einstellungen: KI-Terminal
  'Claude model': 'Claude-Modell',
  'Turn budget (USD)': 'Budget pro Zug (USD)',
  'Mission guidance': 'Missions-Leitfaden',
  'Mission loop interval': 'Missions-Schleifenintervall',
  'Worktree per writer': 'Worktree pro Schreiber',
  'Loop may commit': 'Schleife darf committen',
  'Loop may push': 'Schleife darf pushen',
  'Loop may publish': 'Schleife darf veröffentlichen',
  'Max concurrent writers': 'Max. gleichzeitige Schreiber',
  'Claude control': 'Claude-Steuerung',
  'Claude control: confirm': 'Claude-Steuerung: bestätigen',
  'Ask before each AI turn': 'Vor jedem KI-Zug fragen',
  'Mission context in Claude’s prompt': 'Missionskontext in Claudes Prompt',
  'Mission gates': 'Missions-Prüfungen',
  'Mission spend cap (USD)': 'Ausgabenlimit pro Mission (USD)',
  'the model claude -p uses for AI terminal turns (the CLI’s default when unset)': 'das Modell, das claude -p im KI-Terminal nutzt (ohne Angabe der Standard der CLI)',
  'claude -p --max-budget-usd: the most one turn may spend; the sandbox stays read-only': 'claude -p --max-budget-usd: so viel darf ein Zug höchstens kosten; die Sandbox bleibt schreibgeschützt',
  'after a mission goal is entered, claude -p writes detailed guidance by lifecycle stage and suggests ruflo capabilities to bring in (it asks first unless always accept)':
    'nach Eingabe eines Missionsziels schreibt claude -p einen ausführlichen Leitfaden je Phase und schlägt passende ruflo-Funktionen vor (fragt vorher, außer bei immer annehmen)',
  'how often a mission’s /loop ticks: each tick checks progress, fixes failures and runs the gates (default 5m)':
    'wie oft die /loop einer Mission läuft: jeder Durchlauf prüft den Fortschritt, behebt Fehler und führt die Prüfungen aus (Standard 5 min)',
  'each writing agent works in its own git worktree, on disjoint files, so concurrent writers never collide (default on)':
    'jeder schreibende Agent arbeitet in seinem eigenen Git-Worktree an getrennten Dateien, damit sich gleichzeitige Schreiber nie in die Quere kommen (Standard an)',
  'the loop may commit to the mission branch, and nowhere else (default on)': 'die Schleife darf in den Missions-Branch committen und nirgendwo sonst (Standard an)',
  'the loop may push the mission branch to its remote (default off: it stops at the branch and says so)':
    'die Schleife darf den Missions-Branch zum Remote pushen (Standard aus: sie hält am Branch an und sagt Bescheid)',
  'the loop may publish releases or packages the mission names (default off: nothing is published without your word)':
    'die Schleife darf Releases oder Pakete veröffentlichen, die die Mission nennt (Standard aus: ohne dein Wort wird nichts veröffentlicht)',
  'the most writing agents a mission loop runs at once (default 6)': 'die meisten schreibenden Agenten, die eine Missionsschleife gleichzeitig laufen lässt (Standard 6)',
  'auto-run pauses when one mission’s spend reaches this (list-price estimate; empty means no cap)':
    'der Autolauf pausiert, wenn die Ausgaben einer Mission diesen Betrag erreichen (Schätzung nach Listenpreis; leer heißt kein Limit)',

  // Einstellungen: ruflo-Konfiguration
  'Swarm topology': 'Schwarm-Topologie',
  'Max agents': 'Max. Agenten',
  'Memory backend': 'Speicher-Backend',
  'Memory cache': 'Speicher-Cache',
  'HNSW index': 'HNSW-Index',
  'Neural learning': 'Neuronales Lernen',
  'Auto-scale': 'Automatisch skalieren',
  Coordination: 'Koordination',
  Hooks: 'Hooks',
  'MCP port': 'MCP-Port',
  'how agents are wired: hierarchical keeps a queen in charge, mesh lets peers talk': 'wie Agenten verbunden sind: hierarchical lässt eine Königin führen, mesh lässt alle miteinander reden',
  'the most agents a swarm may hold at once': 'die meisten Agenten, die ein Schwarm gleichzeitig haben darf',
  'where memory entries are stored': 'wo Speichereinträge abgelegt werden',
  'entries kept hot in memory': 'Einträge, die im Arbeitsspeicher bereitgehalten werden',
  'approximate nearest-neighbour search for memory': 'näherungsweise Nachbarsuche für den Speicher',
  'how a swarm agrees (consensus by default)': 'wie ein Schwarm sich einigt (standardmäßig Konsens)',
  'let the swarm add and retire agents with load': 'den Schwarm je nach Last Agenten hinzufügen und entfernen lassen',
  'ruflo hooks that learn from your edits and routes': 'ruflo-Hooks, die aus deinen Änderungen und Routen lernen',
  'the port ruflo’s MCP server listens on': 'der Port, auf dem ruflos MCP-Server lauscht',
  'Writes ruflo’s configuration for this project; a running daemon or swarm may need a restart to pick it up.':
    'Schreibt die ruflo-Konfiguration für dieses Projekt; ein laufender Daemon oder Schwarm muss eventuell neu gestartet werden.',
  'Changes this plugin’s user option only (options left out keep their values); reload plugins (/reload-plugins) or restart for it to apply.':
    'Ändert nur diese Plugin-Option (andere behalten ihren Wert); zum Übernehmen /reload-plugins oder neu starten.',

  // Einstellungen: Plugin-Optionen (aus plugin.json)
  'ruflo CLI': 'ruflo-CLI',
  'Disk refresh (seconds)': 'Neu einlesen (Sekunden)',
  'Animation frames per second': 'Animationsbilder pro Sekunde',
  'Band above the prompt': 'Band über der Eingabe',
  'Cockpit pane': 'Cockpit-Fenster',
  'Ask the federation relay': 'Föderations-Relay fragen',
  Look: 'Aussehen',
  'Boot screen': 'Startbildschirm',
  'Frame cap while the pane is shown and holds the keys (0 to 12; 0 turns motion off). Hidden, unfocused or closed, nothing animates.':
    'Bildrate, solange das Fenster sichtbar ist und die Tasten hat (0 bis 12; 0 schaltet Bewegung aus). Verborgen, ohne Fokus oder geschlossen wird nichts animiert.',

  // Hilfe und Palette
  'Actions for the selection': 'Aktionen für die Auswahl',
}

export const PHRASES: readonly (readonly [string, string])[] = [
  // Navigationsgruppen
  ['MAIN', 'HAUPT'],
  ['MIND', 'GEIST'],
  ['SAFETY', 'SICHERHEIT'],
  ['NETWORK', 'NETZWERK'],
  ['TOOLS', 'WERKZEUGE'],
  ['INTELLIGENCE', 'INTELLIGENZ'],
  ['SAFETY & OPS', 'SICHERHEIT & BETRIEB'],
  ['NETWORK & EXTEND', 'NETZWERK & ERWEITERN'],

  // Seiten
  ['Main Menu', 'Hauptmenü'],
  ['Missions', 'Missionen'],
  ['Overview', 'Übersicht'],
  ['Swarm Topology', 'Schwarm-Topologie'],
  ['Swarm', 'Schwarm'],
  ['Hive-Mind', 'Schwarmgeist'],
  ['Claims Board', 'Aufgabentafel'],
  ['Claims', 'Aufgaben'],
  ['Federation', 'Föderation'],
  ['Plugins & Mods', 'Plugins & Mods'],
  ['Learning Lab', 'Lern-Labor'],
  ['Learning', 'Lernen'],
  ['Memory Lab', 'Speicher-Labor'],
  ['Memory', 'Speicher'],
  ['Cost & Budget', 'Kosten & Budget'],
  ['Cost', 'Kosten'],
  ['Agent Timeline', 'Agenten-Zeitleiste'],
  ['Timeline', 'Zeitleiste'],
  ['Approvals', 'Freigaben'],
  ['Event Stream', 'Ereignisstrom'],
  ['Events', 'Ereignisse'],
  ['The Room', 'Der Raum'],
  ['Room', 'Raum'],
  ['AI Terminal', 'KI-Terminal'],
  ['Security & Doctor', 'Sicherheit & Diagnose'],
  ['Performance', 'Leistung'],
  ['Automation', 'Automatisierung'],
  ['Neural', 'Neuronal'],
  ['Vector Lab', 'Vektor-Labor'],
  ['Self-Evolution', 'Selbst-Evolution'],
  ['Dev Tools', 'Entwicklerwerkzeuge'],
  ['Plugin Catalog', 'Plugin-Katalog'],
  ['Command Palette', 'Befehlspalette'],
  ['Settings', 'Einstellungen'],
  ['Log Off', 'Abmelden'],

  // Fußzeile
  ['Actions', 'Aktionen'],
  ['Ask Claude', 'Claude fragen'],
  ['Refresh', 'Aktualisieren'],
  ['Help', 'Hilfe'],
  ['Close', 'Schließen'],

  // Einstellungen: Abschnitte und kurze Wörter
  ['PLUGIN OPTIONS', 'PLUGIN-OPTIONEN'],
  ['RUFLO CONFIG', 'RUFLO-KONFIGURATION'],
  ['AI TERMINAL', 'KI-TERMINAL'],
  ['simple', 'einfach'],
  ['advanced', 'erweitert'],
  ['changed only', 'nur geänderte'],
  ['shown of', 'angezeigt von'],
  ['changed', 'geändert'],
  ['ruflo plugins with options', 'ruflo-Plugins mit Optionen'],
  ['Enter asks to set it', 'Enter fragt zum Setzen'],
  ['Enter asks', 'Enter fragt'],
]

/** Abschnittsnamen im Hauptmenü, gezeichnet als `── name ────`. */
export const SECTION: Record<string, string> = {
  'start here': 'hier starten',
  coordinate: 'koordinieren',
  learn: 'lernen',
  remember: 'erinnern',
  protect: 'schützen',
  observe: 'beobachten',
  network: 'Netzwerk',
  extend: 'erweitern',
  tools: 'Werkzeuge',
}
