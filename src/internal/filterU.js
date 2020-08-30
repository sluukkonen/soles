export const filterU = (fn, array) => {
  const result = []

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (fn(value, i, array)) {
      result.push(value)
    }
  }

  return result
}
