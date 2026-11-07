const IMAGEKIT_HOST = 'ik.imagekit.io'
const DEFAULT_FORMAT = 'f-avif'

/**
 * Builds an ImageKit URL, defaulting the output format to AVIF.
 *
 * Transforms are applied via the `?tr=` query. Later transforms win per
 * parameter, so an explicit `f-*` in the arguments overrides the default.
 * Non-ImageKit URLs are returned unchanged.
 */
export const imagekit = (src: string, transforms: string[] = []): string => {
  let url: URL
  try {
    url = new URL(src)
  } catch {
    return src
  }
  if (url.hostname !== IMAGEKIT_HOST) return src

  const merged = new Map<string, string>([['f', DEFAULT_FORMAT]])
  for (const t of transforms) {
    if (t) merged.set(t.split('-')[0], t)
  }

  url.searchParams.delete('tr')
  const rest = url.searchParams.toString()
  const tr = `tr=${[...merged.values()].join(',')}`
  return `${url.origin}${url.pathname}?${[tr, rest].filter(Boolean).join('&')}`
}
