import { minimumByU } from './internal/minimumByU'
import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'

export const minimumBy = setName(curry2(minimumByU), 'minimumBy')