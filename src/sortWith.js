import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { sortWithU } from './internal/sortWithU'

export const sortWith = setName(curry2(sortWithU), 'sortWith')
