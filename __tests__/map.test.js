import { map } from '../src/map'

it('applies a function to each element of an array', () => {
  const inc = (x) => x + 1

  expect(map(inc, [])).toEqual([])
  expect(map(inc, [1])).toEqual([2])
  expect(map(inc, [1, 2])).toEqual([2, 3])
  expect(map(inc, [1, 2, 3])).toEqual([2, 3, 4])
})

it('passes the array index in the second argument', () => {
  const fn = jest.fn()
  const array = ['a', 'b', 'c']

  map(fn, array)

  expect(fn.mock.calls).toEqual([
    ['a', 0, array],
    ['b', 1, array],
    ['c', 2, array],
  ])
})
