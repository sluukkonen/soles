import { curry3 } from './internal/curry3'
import { getOrU } from './internal/getOrU'
import { setName } from './internal/setName'

export const getOr = setName(curry3(getOrU), 'getOr')