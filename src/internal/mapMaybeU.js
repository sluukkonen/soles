import { isDefined } from '../isDefined'

export const mapMaybeU = (fn, array) => {
  const result = []

  for (const value of array) {
    const maybeValue = fn(value)
    if (isDefined(maybeValue)) {
      result.push(maybeValue)
    }
  }

  return result
}
