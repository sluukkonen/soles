import { hasOwn } from '../../core/internal/index.js'

export const mapKeysU = (fn, object) => {
  const result = {}

  for (const key in object) {
    if (hasOwn(object, key)) {
      result[fn(key)] = object[key]
    }
  }

  return result
}