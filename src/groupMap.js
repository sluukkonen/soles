import { curry3 } from './curry3'
import { groupMapU } from './internal/groupMapU'
import { setName } from './internal/setName'

export const groupMap = setName(curry3(groupMapU), 'groupMap')
