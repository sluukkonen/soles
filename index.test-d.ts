// Just try to import the module for now.
import * as S from '.'

S.seq(
  [1, 2, 3],
  S.map((x) => x + 1),
  S.filter((x) => x % 2 === 0),
  S.sum
)
