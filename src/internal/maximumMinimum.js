export const maximumMinimum = (fn, array, compare) => {
  const length = array.length
  if (length === 0) return undefined
  let acc = fn(array[0])

  for (let i = 1; i < length; i++) {
    acc = compare(fn(array[i]), acc)
  }

  return acc
}
