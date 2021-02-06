import { setName } from './internal/setName'
import { curry2 } from './curry2'
import { filterU } from './internal/filterU'

export const filter = setName(curry2(filterU), 'filter')
