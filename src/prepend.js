import { curry2 } from './curry2'
import { prependU } from './internal/prependU'
import { setName } from './internal/setName'

export const prepend = setName(curry2(prependU), 'prepend')
