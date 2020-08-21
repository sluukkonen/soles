import { minU } from './internal/minU'
import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'

export const min = setName(curry2(minU), 'min')