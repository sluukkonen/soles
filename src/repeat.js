import { curry2 } from './internal/curry2'
import { repeatU } from './internal/repeatU'
import { setName } from './internal/setName'

export const repeat = setName(curry2(repeatU), 'repeat')
