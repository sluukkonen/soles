import { curry2 } from './internal/curry2'
import { groupByU } from './internal/groupByU'
import { setName } from './internal/setName'

export const groupBy = setName(curry2(groupByU), 'groupBy')
