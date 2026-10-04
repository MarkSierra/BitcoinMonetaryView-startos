export const DEFAULT_LANG = 'en_US'

const dict = {
  'Rescan From Scratch': 0,
  "Delete BitcoinMonetaryView's own analysis results and scan the whole chain again on the next start. Settings are kept. Your Bitcoin node is not touched. Stop the service before running this action.": 1,
  'All analysis results are deleted. The full history scan starts again and can take a day or more.': 2,
  'Results Deleted': 3,
  'Start BitcoinMonetaryView to begin a fresh scan.': 4,
  'Scan Speed': 5,
  'How hard the history scan may work your node. Eco (recommended): one block at a time with pauses, one CPU core. Balanced: two parallel requests, two cores. Full speed: four parallel requests, up to four cores. In every profile the scan backs off automatically when Bitcoin answers slowly and waits while Bitcoin is syncing.': 6,
  'Eco (recommended)': 7,
  Balanced: 8,
  'Full speed': 9,
  'Scan Window': 10,
  'Optional: only scan history during these hours each day, e.g. 01:00-07:00. Leave empty to scan around the clock. New blocks are always analysed.': 11,
  'Use 24-hour times like 01:00-07:00': 12,
  'Time Zone': 13,
  'Time zone for the scan window, as an IANA name such as Europe/Berlin or America/New_York.': 14,
  'Use an IANA time zone name such as Europe/Berlin': 15,
  'Scan Settings': 16,
  'Choose how fast the history scan runs and, optionally, the hours it may run in. Changes take effect within seconds; no restart needed.': 17,
  'Keep verified payment envelopes': 18,
  "Monetary Node's carrier policy: oversized OP_RETURN outputs that are exactly-parsed Shielded Bitcoin payment envelopes count as money, not spam. Turn off to use the ruleset of the Monetary Node project's published figures.": 19,
  'Spam Rules': 20,
  'Options of the Monetary Node spam rules used for the analysis.': 21,
  'Changing a rule makes BitcoinMonetaryView delete its results and rescan the whole chain, which can take a day or more. Your Bitcoin node is not affected.': 22,
  'Web UI': 23,
  'The BitcoinMonetaryView dashboard': 24,
  'Starting BitcoinMonetaryView': 25,
  'Bitcoin connection': 26,
  'Waiting for Bitcoin to publish its RPC interface': 27,
  'Web Interface': 28,
  'The web interface is ready': 29,
  'The web interface is not ready': 30,
  'Scan Progress': 31,
  'Starting up': 32,
  'Up to date — following new blocks': 33,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
