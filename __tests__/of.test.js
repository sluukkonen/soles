import { of } from '../src/of'

it('creates a singleton array from the first argument', () => {
  expect(of(1)).toEqual([1])
  expect(of(2)).toEqual([2])
})
