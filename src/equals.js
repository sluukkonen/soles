import { equalsU } from './internal/equalsU'
import { isObjectLike } from './internal/isObjectLike'
import { isSameValueZero } from './internal/isSameValueZero'

export function equals(a, b) {
  // Optimize the curried equals(...) case.
  return arguments.length < 2
    ? !isObjectLike(a)
      ? function equals1(b) {
          return isSameValueZero(a, b)
        }
      : function equals1(b) {
          return equalsU(a, b)
        }
    : equalsU(a, b)
}
