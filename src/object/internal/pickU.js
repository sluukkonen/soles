import { hasOwn } from '../../core/internal/index.js'

export const pickU = (keys, object) => {
  const result = {}

  for (const key of keys) {
    if (hasOwn(key, object)) {
      result[key] = object[key]
    }
  }

  return result
}
