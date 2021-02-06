import { curry3 } from './curry3'
import { modifyU } from './internal/modifyU'
import { setName } from './internal/setName'

export const modify = setName(curry3(modifyU), 'modify')
