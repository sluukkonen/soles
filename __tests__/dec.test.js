import { dec } from '../src/dec'

it('decrements a number', () => {
  expect(dec(0)).toBe(-1)
  expect(dec(1)).toBe(0)
  expect(dec(2)).toBe(1)
})
