import { second } from '../src/second'

it('returns the second argument', () => {
  expect(second(0, 1)).toBe(1)
  expect(second(1, 0)).toBe(0)
})
