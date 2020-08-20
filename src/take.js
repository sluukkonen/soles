import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'
import { takeU } from './internal/takeU'

export const take = setName(curry2(takeU), 'take')
