import { readFile, rename } from 'fs/promises'

/** Moves settings.json to settings.json.damaged unless it holds a JSON object; true when moved. */
export async function setAsideDamagedSettings(path: string): Promise<boolean> {
  let raw: string
  try {
    raw = await readFile(path, 'utf8')
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === 'ENOENT') return false
    throw e
  }
  try {
    const data = JSON.parse(raw)
    if (data && typeof data === 'object' && !Array.isArray(data)) return false
  } catch {}
  await rename(path, `${path}.damaged`)
  return true
}
