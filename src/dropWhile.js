import { setName } from './internal/setName'
import { curry2 } from './internal/curry2'
import { dropWhileU } from './internal/dropWhileU'

export const dropWhile = setName(curry2(dropWhileU), 'dropWhile')