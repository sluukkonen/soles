import {
  builtinIsNaN,
  equalsU,
  isObjectLike,
} from '../../core/internal/index.js'

export const indexOfBy = (eq, value, array) => {
  if (eq === equalsU && !isObjectLike(value) && !builtinIsNaN(value)) {
    return array.indexOf(value)
  }

  for (let i = 0; i < array.length; i++) {
    if (eq(value, array[i])) {
      return i
    }
  }

  return -1
}