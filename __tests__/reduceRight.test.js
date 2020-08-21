import { reduceRight } from '../src'

it('reduces an array from right to left', () => {
  const add = (a, b) => a + b

  expect(reduceRight(add, 0, [])).toEqual(0)
  expect(reduceRight(add, 0, [1])).toEqual(1)
  expect(reduceRight(add, 0, [1, 2])).toEqual(3)
  expect(reduceRight(add, 0, [1, 2, 3])).toEqual(6)
})

it('passes the array index in the third argument', () => {
  const fn = jest.fn((a, b) => a + b)

  reduceRight(fn, 0, [1, 2, 3])

  expect(fn.mock.calls).toEqual([
    [3, 0, 2],
    [2, 3, 1],
    [1, 5, 0],
  ])
})