import { curry2 } from './curry2'
import { mapU } from './internal/mapU'
import { setName } from './internal/setName'

export const map = setName(curry2(mapU), 'map')
