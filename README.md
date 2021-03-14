# Soles 🦶

![CI](https://github.com/sluukkonen/soles/workflows/Node.js%20CI/badge.svg)

## Goals

- A functional JavaScript utility library, inspired by projects like [Ramda](https://github.com/ramda/ramda) and [Lodash](https://github.com/lodash/lodash)
- No mutation of input data
- Automatically curried, data-last API
- Performance on par with native JavaScript methods
- Small footprint (4 kB gzipped) and good tree-shaking support.
- Supports only native JavaScript data types. No support for transducers, lenses or Fantasy Land data types.
- Target reasonably current JavaScript environments (Node 10+)
- Good out-of-the-box TypeScript typings.

## Table Of Contents

- [API Reference](#api-reference) <!-- BEGIN TOC -->
  - [Basic array operations](#basic-array-operations)
    - [append](#append)
    - [concat](#concat)
    - [forEach](#foreach)
    - [forEachIndexed](#foreachindexed)
    - [head](#head)
    - [init](#init)
    - [last](#last)
    - [prepend](#prepend)
    - [tail](#tail)
  - [Transforming arrays](#transforming-arrays)
    - [flatMap](#flatmap)
    - [flatten](#flatten)
    - [intersperse](#intersperse)
    - [join](#join)
    - [map](#map)
    - [mapIndexed](#mapindexed)
    - [mapMaybe](#mapmaybe)
    - [reverse](#reverse)
  - [Reducing arrays](#reducing-arrays)
    - [maximum](#maximum)
    - [maximumBy](#maximumby)
    - [minimum](#minimum)
    - [minimumBy](#minimumby)
    - [reduce](#reduce)
    - [reduceRight](#reduceright)
    - [sum](#sum)
    - [sumBy](#sumby)
  - [Searching arrays with a predicate](#searching-arrays-with-a-predicate)
    - [count](#count)
    - [every](#every)
    - [filter](#filter)
    - [filterIndexed](#filterindexed)
    - [find](#find)
    - [findIndex](#findindex)
    - [findLast](#findlast)
    - [findLastIndex](#findlastindex)
    - [none](#none)
    - [partition](#partition)
    - [some](#some)
  - [Searching arrays by value](#searching-arrays-by-value)
    - [includes](#includes)
    - [indexOf](#indexof)
    - [lastIndexOf](#lastindexof)
  - [Grouping arrays](#grouping-arrays)
    - [countBy](#countby)
    - [groupBy](#groupby)
    - [groupMap](#groupmap)
    - [groupMapReduce](#groupmapreduce)
    - [indexBy](#indexby)
  - [Building arrays](#building-arrays)
    - [of](#of)
    - [pair](#pair)
    - [range](#range)
    - [repeat](#repeat)
    - [times](#times)
  - [Slicing arrays](#slicing-arrays)
    - [drop](#drop)
    - [dropLast](#droplast)
    - [dropLastWhile](#droplastwhile)
    - [dropWhile](#dropwhile)
    - [slice](#slice)
    - [take](#take)
    - [takeLast](#takelast)
    - [takeLastWhile](#takelastwhile)
    - [takeWhile](#takewhile)
  - [Sorting arrays](#sorting-arrays)
    - [ascend](#ascend)
    - [descend](#descend)
    - [sort](#sort)
    - [sortBy](#sortby)
    - [sortWith](#sortwith)
  - [Zipping arrays](#zipping-arrays)
    - [zip](#zip)
    - [zipObject](#zipobject)
    - [zipWith](#zipwith)
  - [Set operations](#set-operations)
    - [difference](#difference)
    - [differenceWith](#differencewith)
    - [intersection](#intersection)
    - [intersectionWith](#intersectionwith)
    - [union](#union)
    - [unionWith](#unionwith)
    - [uniq](#uniq)
    - [uniqWith](#uniqwith)
  - [Object](#object)
    - [entries](#entries)
    - [fromEntries](#fromentries)
    - [has](#has)
    - [keys](#keys)
    - [mapKeys](#mapkeys)
    - [mapValues](#mapvalues)
    - [omit](#omit)
    - [pick](#pick)
    - [values](#values)
  - [Function](#function)
    - [binary](#binary)
    - [complement](#complement)
    - [compose](#compose)
    - [constant](#constant)
    - [curry2](#curry2)
    - [curry3](#curry3)
    - [curry4](#curry4)
    - [flip](#flip)
    - [identity](#identity)
    - [noop](#noop)
    - [not](#not)
    - [pipe](#pipe)
    - [second](#second)
    - [tap](#tap)
    - [unary](#unary)
  - [Getters and setters](#getters-and-setters)
    - [at](#at)
    - [atOr](#ator)
    - [modifyAt](#modifyat)
    - [modifyProp](#modifyprop)
    - [prop](#prop)
    - [propOr](#propor)
    - [removeAt](#removeat)
    - [removeProp](#removeprop)
    - [setAt](#setat)
    - [setProp](#setprop)
  - [Relation](#relation)
    - [clamp](#clamp)
    - [equals](#equals)
    - [equalsBy](#equalsby)
    - [gt](#gt)
    - [gte](#gte)
    - [lt](#lt)
    - [lte](#lte)
    - [max](#max)
    - [maxBy](#maxby)
    - [min](#min)
    - [minBy](#minby)
  - [Math](#math)
    - [add](#add)
    - [dec](#dec)
    - [divideBy](#divideby)
    - [inc](#inc)
    - [multiply](#multiply)
    - [negate](#negate)
    - [subtractBy](#subtractby)
  - [Logic](#logic)
    - [maybe](#maybe)
    - [valueOr](#valueor)
  - [Type tests](#type-tests)
    - [isArray](#isarray)
    - [isBigInt](#isbigint)
    - [isBoolean](#isboolean)
    - [isDate](#isdate)
    - [isDefined](#isdefined)
    - [isError](#iserror)
    - [isFunction](#isfunction)
    - [isMap](#ismap)
    - [isNil](#isnil)
    - [isNull](#isnull)
    - [isNumber](#isnumber)
    - [isObject](#isobject)
    - [isRegExp](#isregexp)
    - [isSet](#isset)
    - [isString](#isstring)
    - [isSymbol](#issymbol)
    - [isUndefined](#isundefined)
<!-- END TOC -->

## API Reference
<!-- BEGIN API -->
### Basic array operations

#### append

```typescript
<T>(value: T, array: T[]) => T[]
```

Append a new element to the end of an array.

```typescript
S.append(4, [1, 2, 3])
// => [1, 2, 3, 4]
```

**See also:** [prepend](#prepend), [concat](#concat)

***

#### concat

```typescript
<T>(array: T[], other: T[]) => T[]
```

Concatenate two arrays together.

```typescript
S.concat([1, 2, 3], [4, 5, 6])
// => [1, 2, 3, 4, 5, 6]
```

**See also:** [append](#append), [prepend](#prepend)

***

#### forEach

```typescript
<T>(fn: (value: T) => void, array: T[]) => T[]
```

Apply `fn` to each element of the `array` and return the `array`.

```typescript
S.forEach(console.log, ['h', 'i', '!'])
h
i
!
// => ['h', 'i', '!']
```

***

#### forEachIndexed

```typescript
<T>(fn: (index: number, value: T) => void, array: T[]) => T[]
```

Like [forEach](#foreach), but `fn` also receives the element index as the first
argument.

```typescript
S.forEachIndexed(console.log, ['h', 'i', '!'])
0 h
1 i
2 !
// => ['h', 'i', '!']
```

***

#### head

```typescript
<T>(array: T[]) => T | undefined
```

Return the first element of the `array` or `undefined` if the array is empty.

```typescript
S.head([1, 2, 3])
// => 1

S.head([])
// => undefined
```

**See also:** [tail](#tail), [init](#init), [last](#last)

***

#### init

```typescript
<T>(array: T[]) => T[]
```

Return all elements of the `array` except the last.

```typescript
S.tail([1, 2, 3])
// => [1, 2]
```

**See also:** [last](#last), [head](#head), [tail](#tail)

***

#### last

```typescript
<T>(array: T[]) => T | undefined
```

Return the last element of the `array` or `undefined` if the array is empty.

```typescript
S.last([1, 2, 3])
// => 3

S.last([])
// => undefined
```

**See also:** [init](#init), [head](#head), [tail](#tail)

***

#### prepend

```typescript
<T>(value: T, array: T[]) => T[]
```

Prepend a new element to the beginning of an array.

```typescript
S.prepend(0, [1, 2, 3])
// => [0, 1, 2, 3]
```

**See also:** [append](#append), [concat](#concat)

***

#### tail

```typescript
<T>(array: T[]) => T[]
```

Return all elements of the `array` except the first.

```typescript
S.tail([1, 2, 3])
// => [2, 3]
```

**See also:** [head](#head), [init](#init), [last](#last)

***

### Transforming arrays

#### flatMap

```typescript
<T, U>(fn: (value: T) => U[], array: T[]) => U[]
```

Return an array containing the results of applying `fn` to each element in
the original `array` and then flattening the result by one level.

```typescript
S.flatMap((n) => [n, n], [1, 2, 3])
// => [1, 1, 2, 2, 3, 3]
```

**See also:** [map](#map), [flatten](#flatten)

***

#### flatten

```typescript
<T extends unknown[], D extends number>(depth: D, array: T) => Array<FlatArray<T, D>>
```

Flatten a nested `array` by `n` levels.

```typescript
S.flatten(1, [1, [2, [3]]])
// => [1, 2, [3]]

S.flatten(2, [1, [2, [3]]])
// => [1, 2, 3]
```

**See also:** [flatMap](#flatmap)

***

#### intersperse

```typescript
<T>(separator: T, array: T[]) => T[]
```

Return a copy of `array` with `separator` inserted between each element.

```typescript
S.intersperse(',', ['a', 'b', 'c'])
// => ['a', ',', 'b', ',', 'c']

S.intersperse(',', [])
// => []
```

**See also:** [join](#join)

***

#### join

```typescript
<T>(separator: string, array: T[]) => string
```

Convert the `array` to a string, inserting the `separator` between each
element.

```typescript
S.join(', ', [1, 2, 3])
// => '1, 2, 3'
```

**See also:** [intersperse](#intersperse)

***

#### map

```typescript
<T, U>(fn: (value: T) => U, array: T[]) => U[]
```

Return an array containing the results of applying `fn` to each element in
the original `array`.

```typescript
S.map(S.inc, [1, 2, 3])
// => [2, 3, 4]
```

**See also:** [mapIndexed](#mapindexed), [mapMaybe](#mapmaybe), [flatMap](#flatmap)

***

#### mapIndexed

```typescript
<T, U>(fn: (index: number, value: T) => U, array: T[]) => U[]
```

Like [map](#map), but `fn` also receives the element index as the first
argument.

```typescript
S.mapIndexed((i, c) => `${i}-${c}`, ['a', 'b', 'c'])
// => ['0-a', '1-b', '2-c']
```

**See also:** [map](#map)

***

#### mapMaybe

```typescript
<T, U>(fn: (value: T) => U | undefined, array: T[]) => U[]
```

Return an array containing the results of applying `fn` to each element in
the original `array`, discarding any `undefined` values.

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: undefined },
  { name: 'Carol', age: 20 }
]

S.mapMaybe(S.prop('age'), users)
// => [10, 20]
```

**See also:** [map](#map)

***

#### reverse

```typescript
<T>(array: T[]) => T[]
```

Reverse an `array`.

```typescript
S.reverse([1, 2, 3])
// => [3, 2, 1]
```

***

### Reducing arrays

#### maximum

```typescript
<T extends Ordered>(array: T[]) => T | undefined
```

Return the largest element of an `array` or `undefined` if the array is
empty.

```typescript
S.maximum([1, 2, 3])
// => 3

S.maximum([])
// => undefined
```

**See also:** [minimum](#minimum), [maximumBy](#maximumby)

***

#### maximumBy

```typescript
<T>(fn: (value: T) => Ordered, array: T[]) => T | undefined
```

Like [maximum](#maximum), but apply `fn` to each value before determining
their ordering.

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Carol', age: 30 },
]

S.maximumBy((u) => u.age, users)
// => { name: 'Carol', age: 30 }
```

**See also:** [maximum](#maximum), [minimumBy](#minimumby)

***

#### minimum

```typescript
<T extends Ordered>(array: T[]) => T | undefined
```

Return the smallest element of `array` or `undefined` if the array is empty.

```typescript
S.minimum([1, 2, 3])
// => 1

S.minimum([])
// => undefined
```

**See also:** [maximum](#maximum), [minimumBy](#minimumby)

***

#### minimumBy

```typescript
<T>(fn: (value: T) => Ordered, array: T[]) => T | undefined
```

Like [minimum](#minimum), but `fn` is applied to each value before determining
their ordering.

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Carol', age: 30 },
]

S.minimumBy((u) => u.age, users)
// => { name: 'Alice', age: 10 }
```

**See also:** [minimum](#minimum), [maximumBy](#maximumby)

***

#### reduce

```typescript
<T, R>(reducer: (accumulator: T, value: R) => R, initial: R, array: T[]) => R
```

Left-associative fold.

Combine the elements of an array in to a single value by calling `reducer`
with the accumulated value so far and the current element. The first call to
`reducer` receives `initial` as the accumulator.

If the array is empty, `initial` is returned.

```typescript
S.reduce((sum, n) => sum + n, 1, [2, 3, 4]) // equal to ((1 + 2) + 3) + 4
// => 10
```

**See also:** [reduceRight](#reduceright)

***

#### reduceRight

```typescript
<T, R>(reducer: (value: R, accumulator: T) => R, initial: R, array: T[]) => R
```

Right-associative fold.

Combine the elements of an array in to a single value by calling `reducer`
with the current element and the accumulated value so far. The first call to
`reducer` receives `initial` as the accumulator.

If the array is empty, `initial` is returned.

```typescript
S.reduceRight((n, sum) => n + sum, 4, [1, 2, 3]) // equal to 1 + (2 + (3 + 4))
// => 10
```

**See also:** [reduce](#reduce)

***

#### sum

```typescript
(numbers: number[]) => number
```

Sum an `array` of numbers together. Returns `0` if the array is empty.

Uses the [Kahan summation
algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm) for
minimizing numerical error.

```typescript
const numbers = S.repeat(0.1, 10)
// => [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]

S.sum(numbers)
// => 1

numbers.reduce((sum, n) => sum + n, 0)
// => 0.9999999999999999
```

**See also:** [sumBy](#sumby)

***

#### sumBy

```typescript
<T>(fn: (value: T) => number, array: T[]) => number
```

Like [sum](#sum), but each element of the `array` is converted to a number
by applying `fn`.

```typescript
S.sumBy(S.prop('age'), [{ name: 'Alice', age: 10 }, { name: 'Bob', age: 20 }])
// => 30
```

**See also:** [sum](#sum)

***

### Searching arrays with a predicate

#### count

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => number
```

Count the number of elements in the `array` the satisfy the `predicate`.

```typescript
S.count((n) => n > 1, [1, 2, 3])
// => 2
```

**See also:** [filter](#filter)

***

#### every

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => boolean
```

Check if every element in the `array` satisfies the `predicate`.

```typescript
S.every((n) => n < 10, [1, 2, 3])
// => true

S.every((n) => n < 3, [1, 2, 3])
// => false
```

**See also:** [none](#none), [some](#some)

***

#### filter

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => T[]
```

Return the elements of the `array` that satisfy the `predicate`.

```typescript
S.filter((n) => n > 1, [1, 2, 3])
// => [2, 3]
```

**See also:** [count](#count), [partition](#partition)

***

#### filterIndexed

```typescript
<T>(predicate: (index: number, value: T) => boolean, array: T[]) => T[]
```

Like [filter](#filter), but `predicate` also receives the element index as the
first argument.

```typescript
S.filterIndexed((i, n) => i + n === 3, [1, 2, 3])
// => [2]
```

**See also:** [filter](#filter)

***

#### find

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => T | undefined
```

Find the first element in the `array` that satisfies the `predicate`.

Returns `undefined` if none of the elements match.

```typescript
S.find((c) => c !== 'a', ['a', 'b', 'c'])
// => 'b'

S.find((c) => c === 'x', ['a', 'b', 'c'])
// => undefined
```

**See also:** [findLast](#findlast), [findIndex](#findindex)

***

#### findIndex

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => number
```

Find the index of the first element in the `array` that satisfies the
`predicate`.

Returns `-1` if none of the elements satisfy the predicate.

```typescript
S.findIndex((c) => c !== 'a', ['a', 'b', 'c'])
// => 1

S.findIndex((c) => c === 'x', ['a', 'b', 'c'])
// => -1
```

**See also:** [findLastIndex](#findlastindex), [find](#find)

***

#### findLast

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => T | undefined
```

Find the last element in the `array` that satisfies the `predicate`.

Returns `undefined` if none of the elements match.

```typescript
S.findLast((c) => c !== 'a', ['a', 'b', 'c'])
// => 'c'

S.findLast((c) => c === 'x', ['a', 'b', 'c'])
// => undefined
```

**See also:** [find](#find), [findLastIndex](#findlastindex)

***

#### findLastIndex

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => number
```

Find the index of the last element in the `array` that satisfies the
`predicate`.

Returns `-1` if none of the elements match.

```typescript
S.findLastIndex((c) => c !== 'a', ['a', 'b', 'c'])
// => 2

S.findLastIndex((c) => c === 'x', ['a', 'b', 'c'])
// => -1
```

**See also:** [findIndex](#findindex), [findLast](#findlast)

***

#### none

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => boolean
```

Check if none of the elements in the `array` satisfy the `predicate`.

```typescript
S.none((n) => n > 5, [1, 2, 3])
// true

S.none((n) => n > 5, [1, 2, 3])
// false
```

**See also:** [every](#every), [some](#some)

***

#### partition

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => [T[], T[]]
```

Partition the `array` into two arrays, the first containing the elements
that satisfy the `predicate` and the second containing the elements that do
not.

```typescript
const [evens, odds] = S.partition((n) => n % 2 === 0, [1, 2, 3])
// => [[2], [1, 3]]
```

**See also:** [filter](#filter)

***

#### some

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => boolean
```

Check if some elements in the `array` satisfies the `predicate`.

```typescript
S.some((n) => n > 2, [1, 2, 3])
// true

S.some((n) => n > 5, [1, 2, 3])
// false
```

**See also:** [every](#every), [none](#none)

***

### Searching arrays by value

#### includes

```typescript
<T>(value: T, array: T[]) => boolean
```

Check if the `array` includes the specified `value`. Uses [equals](#equals) for
determining equality.

```typescript
S.includes(1, [1, 2, 3])
// => true

S.includes(0, [1, 2, 3])
// => false
```

***

#### indexOf

```typescript
<T>(value: T, array: T[]) => number
```

Return the index of the first element equaling `value`, using [equals](#equals)
for determining equality. Returns -1 if no match can be found.

```typescript
S.indexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
// => 1

S.indexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
// => -1
```

**See also:** [lastIndexOf](#lastindexof), [includes](#includes)

***

#### lastIndexOf

```typescript
<T>(value: T, array: T[]) => number
```

Return the index of the last element equaling `value`, using [equals](#equals)
for determining equality. Returns -1 if no match can be found.

```typescript
S.lastIndexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
// => 4

S.lastIndexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
// => -1
```

**See also:** [indexOf](#indexof), [includes](#includes)

***

### Grouping arrays

#### countBy

```typescript
<T, K extends string>(keyFn: (value: T) => K, array: T[]) => Record<K, number>
```

Apply `keyFn` to each element in the `array` and return an object of counts
by key.

```typescript
const users = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Alice' }
]

S.countBy(S.prop('name'), users)
// => { Alice: 2, Bob: 1 }
```

**See also:** [groupBy](#groupby)

***

#### groupBy

```typescript
<T, K extends string>(keyFn: (value: T) => K, array: T[]) => Record<K, T[]>
```

Partition the `array` into an object of arrays according to `keyFn`.

```typescript
S.groupBy((n) => n % 2, [1, 2, 3])
// => {'0': [2], '1': [1, 3] }
```

**See also:** [indexBy](#indexby), [countBy](#countby), [groupMap](#groupmap), [groupMapReduce](#groupmapreduce)

***

#### groupMap

```typescript
<T, U, K extends string>(mapFn: (value: T) => U, keyFn: (value: T) => K, array: T[]) => Record<K, U[]>
```

Like [groupBy](#groupby), but also apply `mapFn` to each element before adding
it to the corresponding array.

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 30 }
]
const agesByName = S.groupMap(S.prop('age'), S.prop('name'), users)
// => { Alice: [10, 30], Bob: [20] }
```

**See also:** [groupBy](#groupby), [groupMapReduce](#groupmapreduce)

***

#### groupMapReduce

```typescript
<U, T, K extends string>(reducer: (accumulator: U, value: U) => U, mapFn: (value: T) => U, keyFn: (value: T) => K, array: T[]) => Record<K, U>
```

Like [groupMap](#groupmap), but instead of returning an object of arrays, combine
elements mapping to the same key with `reducer`.

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 30 }
]
const sumOfAgesByName = S.groupMapReduce(S.add, S.prop('age'), S.prop('name'), users)
// => { Alice: 40, Bob: 20 }
```

**See also:** [groupBy](#groupby), [groupMap](#groupmap)

***

#### indexBy

```typescript
<T, K extends string>(keyFn: (value: T) => K, array: T[]) => Record<K, T>
```

Apply `keyFn` to each element in the `array` and return an object of
elements indexed by each key.

If multiple elements map to the same key, the last one is selected.

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Carol' }
]
S.indexBy(S.prop('id'), users)
// => { '1': { id: 1, name: 'Carol' }, '2': { id: 2, name: 'Bob' } }
```

**See also:** [groupBy](#groupby)

***

### Building arrays

#### of

```typescript
<T>(value: T) => [T]
```

Create a singleton array containing `value`

```typescript
S.of(1)
// => [1]
```

**See also:** [pair](#pair)

***

#### pair

```typescript
<T, U>(first: T, second: U) => [T, U]
```

Create two element array containing `first` and `second`.

```typescript
S.pair(1, 2)
// => [1, 2]
```

**See also:** [of](#of)

***

#### range

```typescript
(start: number, end: number) => number[]
```

Create an array of numbers between `start` (inclusive) and `end`
(exclusive).

```typescript
S.range(0, 10)
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// S.range(0, 0)
// => []
```

**See also:** [times](#times), [repeat](#repeat)

***

#### repeat

```typescript
<T>(value: T, n: number) => T[]
```

Repeat the given `value` `n` times.

```typescript
S.repeat('a', 5)
// => ['a', 'a', 'a', 'a', 'a']
```

**See also:** [range](#range), [times](#times)

***

#### times

```typescript
<T>(fn: (index: number) => T, n: number) => T[]
```

Create an array of length `n` by applying `fn` to the index of each element.

```typescript
S.times((n) => n * 10, 3)
// => [0, 10, 20]
```

**See also:** [range](#range), [repeat](#repeat)

***

### Slicing arrays

#### drop

```typescript
<T>(n: number, array: T[]) => T[]
```

Drop the first `n` elements of an `array`.

```typescript
S.drop(1, [1, 2, 3])
// => [2, 3]

S.drop(2, [1, 2, 3])
// => [3]
```

**See also:** [dropLast](#droplast), [take](#take)

***

#### dropLast

```typescript
<T>(n: number, array: T[]) => T[]
```

Drop the last `n` elements of an `array`.

```typescript
S.dropLast(1, [1, 2, 3])
// => [1, 2]

S.dropLast(2, [1, 2, 3])
// => [1]
```

**See also:** [drop](#drop), [takeLast](#takelast)

***

#### dropLastWhile

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => T[]
```

Drop elements from the end of an `array` while `predicate` is satisfied.

```typescript
S.dropLastWhile((n) => n > 1, [1, 2, 3])
// => [1]
```

**See also:** [dropWhile](#dropwhile), [takeLastWhile](#takelastwhile)

***

#### dropWhile

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => T[]
```

Drop elements from the beginning of an `array` while `predicate` is
satisfied.

```typescript
S.dropWhile((n) => n === 1, [1, 2, 3])
// => [2, 3]
```

**See also:** [dropLastWhile](#droplastwhile), [takeWhile](#takewhile)

***

#### slice

```typescript
<T>(start: number, end: number, array: T[]) => T[]
```

Create a copy of `array` containing the elements from `start` (inclusive)
to `end` (exclusive).

```typescript
S.slice(0, 2, [1, 2, 3])
// => [1, 2]

S.slice(1, 2, [1, 2, 3])
// => [2]
```

***

#### take

```typescript
<T>(n: number, array: T[]) => T[]
```

Take the first `n` elements of an `array`.

```typescript
S.take(2, [1, 2, 3])
// => [1, 2]
```

**See also:** [drop](#drop), [takeLast](#takelast)

***

#### takeLast

```typescript
<T>(n: number, array: T[]) => T[]
```

Take the last `n` elements of an `array`.

```typescript
S.takeLast(2, [1, 2, 3])
// => [2, 3]
```

**See also:** [dropLast](#droplast), [take](#take)

***

#### takeLastWhile

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => T[]
```

Take elements from the end of an `array` while `predicate` is satisfied.

```typescript
S.takeLastWhile((n) => n >= 2, [1, 2, 3])
// => [2, 3]
```

**See also:** [dropLastWhile](#droplastwhile), [takeWhile](#takewhile)

***

#### takeWhile

```typescript
<T>(predicate: (value: T) => boolean, array: T[]) => T[]
```

Take elements from the beginning of an `array` while `predicate` is
satisfied.

```typescript
S.takeWhile((n) => n <= 2, [1, 2, 3])
// => [1, 2]
```

**See also:** [dropWhile](#dropwhile), [takeLastWhile](#takelastwhile)

***

### Sorting arrays

#### ascend

```typescript
<T>(fn: (value: T) => Ordered) => (first: T, second: T) => number
```

Given a `fn` that maps a `value` to an Ordered value, create an
ascending Comparator function.

```typescript
S.sort(S.ascend(S.prop('age')), [{ name: 'Bob' }, { name: 'Alice' }])
// => [{ name: 'Alice' }, { name: 'Bob' }]
```

**See also:** [descend](#descend), [sort](#sort), [sortWith](#sortwith)

***

#### descend

```typescript
<T>(fn: (value: T) => Ordered) => (first: T, second: T) => number
```

Given a `fn` that maps a `value` to an Ordered value, create a
descending Comparator function.

```typescript
S.sort(S.descend(S.prop('name')), [{ name: 'Alice' }, { name: 'Bob' }])
// => [{ name: 'Bob' }, { name: 'Alice' }]
```

**See also:** [ascend](#ascend), [sort](#sort), [sortWith](#sortwith)

***

#### sort

```typescript
<T>(comparator: (first: T, second: T) => number, array: T[]) => T[]
```

Sort an `array` according to the Comparator function.

```typescript
S.sort((a, b) => a - b, [3, 2, 1])
// => [1, 2, 3]
```

**See also:** [sortBy](#sortby), [sortWith](#sortwith), [ascend](#ascend), [descend](#descend)

***

#### sortBy

```typescript
<T>(fn: (value: T) => Ordered, array: T[]) => T[]
```

Sort an `array` into ascending order by mapping each element of the array
with `fn`.

```typescript
const users = [
  { name: 'Bob', age: 10 },
  { name: 'Alice', age: 20 }
]

S.sortBy(S.prop('name'), users)
// => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 10 }]

S.sortBy(S.prop('age'), users)
// => [{ name: 'Bob', age: 10 }, { name: 'Alice', age: 20 }]
```

**See also:** [sort](#sort), [sortWith](#sortwith)

***

#### sortWith

```typescript
<T>(comparators: Array<(first: T, second: T) => number>, array: T[]) => T[]
```

Sort an `array` according to an array of Comparator functions.

The comparators are tried in order until an ordering has been found.

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 20 },
]

S.sortWith([S.descend(S.prop('age')), S.ascend(S.prop('name'))], users)
// => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 20 }, { name: 'Alice', age: 10 }]
```

**See also:** [sort](#sort), [sortBy](#sortby), [ascend](#ascend), [descend](#descend)

***

### Zipping arrays

#### zip

```typescript
<T, U>(array1: T[], array2: U[]) => Array<[T, U]>
```

Combine the corresponding elements of two arrays into an array of pairs.

If one of the arrays is longer than the other, the extra elements are
ignored.

```typescript
S.zip(['a', 'b', 'c'], [1, 2, 3])
// => [['a', 1], ['b', 2], ['c', 3]]
```

**See also:** [zipWith](#zipwith)

***

#### zipObject

```typescript
<K extends string, T>(keys: K[], values: T[]) => Record<K, T>
```

Combine an array of `keys` and `values` into an object.

If one of the arrays is longer than the other, its extra elements are
ignored.

```typescript
S.zipObject(['a', 'b', 'c'], [1, 2, 3])
// => {a: 1, b: 2, c: 3}
```

**See also:** [fromEntries](#fromentries)

***

#### zipWith

```typescript
<T, U, R>(fn: (value: T, other: U) => R, array1: T[], array2: U[]) => R[]
```

Like [zip](#zip), but the elements are combined with `fn` instead of
constructing a pair.

```typescript
S.zipWith(S.add, [1, 2, 3], [4, 5, 6])
// => [5, 7, 9]
```

**See also:** [zip](#zip)

***

### Set operations

#### difference

```typescript
<T>(first: T[], second: T[]) => T[]
```

Calculate the [set
difference](https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement)
between the `first` array and the `second` array, using [equals](#equals) for
determining equality.

Will not remove duplicates from the `first` array.

```typescript
S.difference([1, 2, 3], [2, 3, 4])
// => [1]
```

**See also:** [differenceWith](#differencewith), [union](#union), [intersection](#intersection)

***

#### differenceWith

```typescript
<T>(equals: (value: T, other: T) => boolean, array: T[], other: T[]) => T[]
```

Like [difference](#difference), but using a custom equality function.

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
]
const otherUsers = [
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
  { id: 4, name: 'Dan' }
]

S.differenceWith((a, b) => a.id === b.id, users, otherUsers)
// => [ { id: 1, name: 'Alice' } ]
```

**See also:** [difference](#difference), [unionWith](#unionwith), [intersectionWith](#intersectionwith)

***

#### intersection

```typescript
<T>(first: T[], second: T[]) => T[]
```

Calculate the [set
intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory))
between the `first` array and the `second` array, using [equals](#equals) for
determining equality.

Will not remove duplicates from the first array.

```typescript
S.intersection([1, 2, 3], [2, 3, 4])
// => [2, 3]
```

**See also:** [intersectionWith](#intersectionwith), [union](#union), [difference](#difference)

***

#### intersectionWith

```typescript
<T>(equals: (value: T, other: T) => boolean, array: T[], other: T[]) => T[]
```

Like [intersection](#intersection), but using a custom equality function.

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
]
const otherUsers = [
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
  { id: 4, name: 'Dan' }
]

S.intersectionWith((a, b) => a.id === b.id, users, otherUsers)
// => [ { id: 2, name: 'Bob' }, { id: 3, name: 'Carol' } ]
```

**See also:** [intersection](#intersection), [unionWith](#unionwith), [differenceWith](#differencewith)

***

#### union

```typescript
<T>(first: T[], second: T[]) => T[]
```

Calculate the [set union](https://en.wikipedia.org/wiki/Union_(set_theory))
between the `first` array and the `second` array, using [equals](#equals) for
determining equality.

Will not remove duplicates from the first array.

```typescript
S.union([1, 2, 3], [2, 3, 4])
// => [1, 2, 3, 4]
```

**See also:** [unionWith](#unionwith), [intersection](#intersection), [difference](#difference)

***

#### unionWith

```typescript
<T>(equals: (value: T, other: T) => boolean, array: T[], other: T[]) => T[]
```

Like [union](#union), but using a custom equality function.

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
]
const otherUsers = [
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
  { id: 4, name: 'Dan' }
]

S.unionWith((a, b) => a.id === b.id, users, otherUsers)
// => [ { id: 1, name: 'Alice' },  { id: 2, name: 'Bob' }, { id: 3, name: 'Carol' }, { id: 4, name: 'Dan' } ]
```

**See also:** [union](#union), [intersectionWith](#intersectionwith), [differenceWith](#differencewith)

***

#### uniq

```typescript
<T>(array: T[]) => T[]
```

Remove duplicate values from `array`, using [equals](#equals) for determining
equality.

```typescript
S.uniq([1, 2, 3, 1, 2, 3])
// => [1, 2, 3]
```

**See also:** [uniqWith](#uniqwith)

***

#### uniqWith

```typescript
<T>(equals: (value: T, other: T) => boolean, array: T[]) => T[]
```

Like [uniq](#uniq), but using a custom equality function.

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]
S.uniqWith((a, b) => a.id === b.id, users)
// => [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
```

**See also:** [uniq](#uniq)

***

### Object

#### entries

```typescript
<T extends object, K extends string>(object: T | null | undefined) => Array<[K, T[K]]>
```

Return an array of the own enumerable property key-value pairs of `object`

```typescript
S.entries({a: 1, b: 2, c: 3})
// => [['a', 1], ['b', 2], ['c', 3]]
```

**See also:** [fromEntries](#fromentries), [keys](#keys), [values](#values)

***

#### fromEntries

```typescript
<K extends string, T>(entries: Array<[K, T]>) => Record<K, T>
```

Create an object from an array of `[key, value]` pairs.

```typescript
S.fromEntries([['a', 1], ['b', 2], ['c', 3]])
// => {a: 1, b: 2, c: 3}
```

**See also:** [entries](#entries)

***

#### has

```typescript
<K extends string>(key: K, object: unknown) => object is Record<string, unknown>
```

Check if `key` is an own property of `object`.

```typescript
S.has('a', {a: 1})
// => true

S.has('toString', {a: 1})
// => false
```

***

#### keys

```typescript
<T extends object>(object: T | null | undefined) => Array<keyof T & string>
```

Return an array of the own enumerable property keys of `object`.

```typescript
S.keys({a: 1, b: 2, c: 3})
// => ['a', 'b', 'c']
```

**See also:** [entries](#entries), [values](#values)

***

#### mapKeys

```typescript
<K1 extends string, K2 extends string, T>(fn: (key: K1) => K2, object: Record<K1, T>) => Record<K2, T>
```

Return an object containing the results of applying `fn` to each key of
the original `object`.

If multiple keys map to the same new key, the latest value is selected.

```typescript
S.mapKeys((k) => k.toUpperCase(), { a: 1, b: 2, c: 3 })
// => { A: 1, B: 2, C: 3 }
```

***

#### mapValues

```typescript
<K extends string, V1, V2>(fn: (value: V1) => V2, object: Record<K, V1>) => Record<K, V2>
```

Return an object containing the results of applying `fn` to each value of
the original `object`.

```typescript
S.mapValues(S.inc, {a: 1, b: 2, c: 3})
// => {a: 2, b: 3, c: 4}
```

***

#### omit

```typescript
<T extends object, K extends string>(keys: K[], object: T) => Omit<T, K>
```

Return a copy of `object` without the specified `keys`.

```typescript
S.omit(['a', 'b'], { a: 1, b: 2, c: 3 })
// => { c: 3 }
```

**See also:** [pick](#pick)

***

#### pick

```typescript
<T extends object, K extends string>(keys: K[], object: T) => Pick<T, K>
```

Return a copy of `object` with only the specified `keys`.

```typescript
S.pick(['a', 'b'], { a: 1, b: 2, c: 3 })
// => { a: 1, b: 2 }
```

**See also:** [omit](#omit)

***

#### values

```typescript
<T extends object>(object: T | null | undefined) => Array<T[keyof T & string]>
```

Return an array of the own enumerable property values of `object`
```
S.keys({a: 1, b: 2, c: 3})
// => [1, 2, 3]
```

**See also:** [keys](#keys), [entries](#entries)

***

### Function

#### binary

```typescript
<T1, T2, R>(fn: VariadicFunction2<T1, T2, R>) => Function2<T1, T2, R>
```

Create a version of `fn` that accepts two arguments.

```typescript
const fn = (...args) => args
const wrapped = S.binary(fn)

fn(1, 2, 3)
// => [1, 2, 3]

wrapped(1, 2, 3)
// => [1, 2]
```

**See also:** [unary](#unary)

***

#### complement

```typescript
<T extends VariadicFunction0<boolean>>(fn: T) => T
```

Create a version of a predicate `fn` that flips the returned boolean value.

```typescript
const isZero = (v) => v === 0
const notZero = S.complement(isZero)

notZero(0)
// => false

notZero(1)
// => true
```

***

#### compose

```typescript
<T extends unknown[], R>(fn: (args: ...T) => R) => (args: ...T) => R
<T extends unknown[], T1, R>(fn1: Function1<T1, R>, fn2: (args: ...T) => T1) => (args: ...T) => R
<T extends unknown[], T1, T2, R>(fn1: Function1<T2, R>, fn2: Function1<T1, T2>, fn3: (args: ...T) => T1) => (args: ...T) => R
```

Right-to-left function composition.

```typescript
const composed = S.compose(S.add(10), S.multiply(2))

composed(2)
// => 14
```

***

#### constant

```typescript
<T>(value: T) => () => T
```

Create a function that always returns `value`.

```typescript
S.map(S.constant(1), [1, 2, 3])
// => [1, 1, 1]
```

***

#### curry2

```typescript
<T extends [unknown, unknown], R>(fn: (args: ...T) => R) => CurriedFunction2<T, R>
```

Create a curried version of a `fn` taking two arguments.

```typescript
 const add = S.curry2((a, b) => a + b)

 add(1)(2)
 // => 3

 add(1, 2)
 // => 3
```

**See also:** [curry3](#curry3), [curry4](#curry4)

***

#### curry3

```typescript
<T extends [unknown, unknown, unknown], R>(fn: (args: ...T) => R) => CurriedFunction3<T, R>
```

Create a curried version of a `fn` taking three arguments.

```typescript
 const add = S.curry3((a, b, c) => a + b + c)

 add(1)(2)(3)
 // => 6

 add(1, 2, 3)
 // => 6
```

**See also:** [curry2](#curry2), [curry4](#curry4)

***

#### curry4

```typescript
<T extends [unknown, unknown, unknown, unknown], R>(fn: (args: ...T) => R) => CurriedFunction4<T, R>
```

Create a curried version of a `fn` taking four arguments.

```typescript
 const add = S.curry4((a, b, c, d) => a + b + c + d)

 add(1)(2)(3)(4)
 // => 10

 add(1, 2, 3, 4)
 // => 10
```

**See also:** [curry2](#curry2), [curry3](#curry3)

***

#### flip

```typescript
<T, U, R>(fn: Function2<T, U, R>) => Function2<U, T, R>
```

Flip the arguments of a binary function.

```typescript
const fn = (...args) => args
const flipped = S.flip(fn)

flipped(1, 2)
// => [2, 1]
```

***

#### identity

```typescript
<T>(value: T) => T
```

Identity function. Returns the first argument.

```typescript
S.identity(5)
// => 5
```

***

#### noop

```typescript
() => undefined
```

Do nothing an return `undefined`.

```typescript
 launchMissiles().then(S.noop).catch(S.noop) // Ignore the promise return value
```

***

#### not

```typescript
(bool: boolean) => boolean
```

Logical not. Flip the value of a boolean argument

```typescript
S.not(true)
// => false

S.not(false)
// => true
```

**See also:** [complement](#complement)

***

#### pipe

```typescript
<T>(initial: T) => T
<T, R>(initial: T, fn1: Function1<T, R>) => R
<T1, T2, R>(initial: T1, fn1: Function1<T1, T2>, fn2: Function1<T2, R>) => R
```

Pipe an `initial` value through one or more functions in left-to-right order,
allowing the programmer to chain operations in a readable manner.

`S.pipe(initial, f1, f2, ...fn)` can be thought as syntax sugar
for `fn(...(f2(f1(initial))))`

```typescript
S.pipe(
  [1, 2, 3]
  S.map((n) => n * 2),
  S.sum
)
// => 12
```

**See also:** [compose](#compose)

***

#### second

```typescript
<T>(first: unknown, second: T) => T
```

Return the `second` argument.

```typescript
S.second(1, 2)
// => 2
```

***

#### tap

```typescript
<T>(fn: (value: T) => void) => (value: T) => T
```

Create a function that applies `fn` to its argument and returns the
argument.

Useful for executing a side-effect within a pipeline.

```typescript
S.pipe(
  [1, 2, 3],
  S.map(S.multiply(2)),
  S.filter(S.gt(2)),
  S.tap(console.log),
  S.sum
)
// Prints: [ 4, 6 ]
// => 10
```

***

#### unary

```typescript
<T, R>(fn: VariadicFunction1<T, R>) => Function1<T, R>
```

Create a version of `fn` that accepts a single argument.

```typescript
['1', '2', '3'].map(S.unary(parseInt))
// => [1, 2, 3]
```

**See also:** [binary](#binary)

***

### Getters and setters

#### at

```typescript
<T>(index: number, array: T[] | null | undefined) => T | undefined
```

Safe array getter. Tries to retrieve the `array` element at `index`.

Returns `undefined` if the `array` doesn't contain an element at `index` or
if the `array` is missing.

```typescript
S.at(0, [1, 2, 3])
// => 1

S.at(0, [])
// => undefined

S.at(0, undefined)
// => undefined
```

**See also:** [atOr](#ator), [prop](#prop)

***

#### atOr

```typescript
<T>(defaultValue: T, index: number, array: T[] | null | undefined) => T
```

Like [at](#at), but returns `defaultValue` as the fallback.

```typescript
S.atOr(999, 0, [1, 2, 3])
// => 1

S.atOr(999, 0, [])
// => 999

S.atOr(999, 0, undefined)
// => 999
```

**See also:** [at](#at), [propOr](#propor)

***

#### modifyAt

```typescript
<T>(index: number, fn: Function1<T, T>, array: T[]) => T[]
```

Returns a copy of `array` where `fn` has been applied to the element at
`index`. If `fn` returns `undefined`, the element is removed.

Removes the element if `fn` returns `undefined`.

```typescript
S.modifyAt(0, S.inc, [1, 2, 3])
// => [2, 2, 3]

S.modifyAt(-1, S.inc, [1, 2, 3])
// => [1, 2, 4]

S.modifyAt(0, S.noop, [1, 2, 3])
// => [2, 3]

S.modifyAt(999, S.inc, [1, 2, 3])
// => [1, 2, 3]
```

**See also:** [setAt](#setat), [removeAt](#removeat)

***

#### modifyProp

```typescript
<K extends string, V, T extends object>(key: K, fn: (value: T[K]) => V, object: T) => SetProp<T, K, V>
```

Return a copy of `object` with the property `key` set to the result of
applying `fn` to its current value. `key`. If `key` is missing, `fn`
receives `undefined` as its argument. If `fn` returns `undefined`, the
property is removed.

```typescript
S.modifyProp('a', (n) => n + 1, { a: 1, b: 2, c: 3 })
// => { a: 2, b: 2, c: 3 }

S.modifyProp('a', () => undefined, { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }

S.modifyProp('d', () => 4, { a: 1, b: 2, c: 3 })
// => { a: 1, b: 2, c: 3, d: 4 }
```

**See also:** [setProp](#setprop), [removeProp](#removeprop)

***

#### prop

```typescript
<K extends string, T extends undefined | null | object>(key: K, object: T) => Prop<T, K>
```

Safe object getter. Tries to retrieve the property `key` from `object`.

Returns `undefined` if the `object` doesn't contain `key` or if the `object`
is missing.

```typescript
S.prop('a', { a: 1, b: 2, c: 3 })
// => 1

S.prop('a', {})
// => undefined

S.prop('a', undefined)
// => undefined
```

**See also:** [propOr](#propor), [at](#at)

***

#### propOr

```typescript
<V, K extends string, T extends undefined | null | object>(defaultValue: V, key: K, object: T) => PropOr<T, K, V>
```

Like [prop](#prop), but returns `defaultValue` as the fallback.

```typescript
S.propOr(999, 'a', { a: 1, b: 2, c: 3 })
// => 1

S.propOr(999, 'a', {})
// => 999

S.propOr(999, 'a', undefined)
// => 999
```

**See also:** [prop](#prop), [atOr](#ator)

***

#### removeAt

```typescript
<T>(index: number, array: T[]) => T[]
```

Returns a copy of `array` where the element at `index` has been removed.

```typescript
S.removeAt(0, [1, 2, 3])
// => [2, 3]

S.removeAt(-1, [1, 2, 3])
// => [1, 2]

S.removeAt(999, [1, 2, 3])
// => [1, 2, 3]
```

**See also:** [modifyAt](#modifyat), [setAt](#setat)

***

#### removeProp

```typescript
<K extends string, T extends object>(key: K, object: T) => Omit<T, K>
```

Return a copy of `object` without the property `key`.

```typescript
S.removeProp('a', { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }
```

***

#### setAt

```typescript
<T>(index: number, value: T | undefined, array: T[]) => T[]
```

Returns a copy of `array` where the element at `index` has been replaced with `value`.

Removes the element if `value` is `undefined`.

```typescript
S.setAt(0, 999, [1, 2, 3])
// => [999, 2, 3]

S.setAt(-1, 999, [1, 2, 3])
// => [1, 2, 999]

S.setAt(999, 999, [1, 2, 3])
// => [1, 2, 3]

S.setAt(0, undefined, [1, 2, 3])
// => [2, 3]
```

**See also:** [modifyAt](#modifyat), [removeAt](#removeat)

***

#### setProp

```typescript
<K extends string, V, T extends object>(key: K, value: V, object: T) => SetProp<T, K, V>
```

Return a copy of `object` with the property `key` set to `value`. If `value`
is `undefined`, the property is removed instead.

```typescript
S.setProp('a', 999, { a: 1, b: 2, c: 3 })
// => { a: 999, b: 2, c: 3 }

S.setProp('a', undefined, { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }
```

**See also:** [modifyProp](#modifyprop), [removeProp](#removeprop)

***

### Relation

#### clamp

```typescript
<T extends Ordered>(interval: [lower: T, upper: T], value: T) => T
```

Clamp a number within the closed interval `[lower, upper]`.

```typescript
S.clamp([0, 10], 5)
// => 5

S.clamp([0, 10], 15)
// => 10

S.clamp([0, 10], -5)
// => 0
```

***

#### equals

```typescript
<T>(value: T, other: T) => boolean
```

Check if two values are deeply equal.

- Primitive values are compared with [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
- Only the own enumerable keys of objects are considered.
- The order of object keys does not matter.
- Built-in objects (e.g. Arrays, Maps & Sets) are not checked for extra keys.
- Sets and Map keys are compared with [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
- Error objects are equal if their `name` and `message` properties are equal.
- Functions and are compared with `===`.
- Supports cyclic references.
- Does not support WeakMaps, WeakSets or typed arrays.

```typescript
S.equals([1, 2, 3], [1, 2, 3])
// => true

S.equals([1, 2, 3], [4, 5, 6])
// => false
```

***

#### equalsBy

```typescript
<T, U>(fn: Function1<T, U>, value: T, other: T) => boolean
```

Like [equals](#equals), but the function `fn` is applied to both values before
determining equality.

```typescript
S.equalsBy(Math.floor, 1, 1.5)
// => true
```

**See also:** [equals](#equals)

***

#### gt

```typescript
<T extends Ordered>(first: T, second: T) => boolean
```

Check if the `second` argument is greater than the `first`.

```typescript
S.filter(S.gt(2), [1, 2, 3])
// => [3]
```

***

#### gte

```typescript
<T extends Ordered>(first: T, second: T) => boolean
```

Check if the `second` argument is greater than or equal to the `first`.
```typescript
S.filter(S.gte(2), [1, 2, 3])
// => [2, 3]
```

***

#### lt

```typescript
<T extends Ordered>(first: T, second: T) => boolean
```

Check if the `second` argument is less than the `first`.

```typescript
S.filter(S.lt(2), [1, 2, 3])
// => [1]
```

***

#### lte

```typescript
<T extends Ordered>(first: T, second: T) => boolean
```

Check if the `second` argument is less than or equal to the `first`.

```typescript
S.filter(S.lte(2), [1, 2, 3])
// => [1, 2]
```

***

#### max

```typescript
<T extends Ordered>(value: T, other: T) => T
```

Return the larger of two values.

```typescript
S.max(1, 2)
// => 2

S.max('a', 'b')
// => 'b'
```

**See also:** [min](#min), [maxBy](#maxby)

***

#### maxBy

```typescript
<T>(fn: (value: T) => Ordered, value: T, other: T) => T
```

Like [max](#max), but apply `fn` to both values before determining their
ordering.

```typescript
S.maxBy(Math.abs, 1, -2)
// => -2
```

**See also:** [max](#max), [minBy](#minby)

***

#### min

```typescript
<T extends Ordered>(value: T, other: T) => T
```

Return the smaller of two values.

```typescript
S.min(1, 2)
// => 1

S.min('a', 'b')
// => 'a'
```

**See also:** [max](#max), [minBy](#minby)

***

#### minBy

```typescript
<T>(fn: (value: T) => Ordered, value: T, other: T) => T
```

Like [min](#min), but apply `fn` to both values before determining their
ordering.

```typescript
S.minBy(Math.abs, -1, 2)
// => -1
```

**See also:** [min](#min), [maxBy](#maxby)

***

### Math

#### add

```typescript
(n: number, m: number) => number
```

Add two numbers together.

```typescript
S.map(S.add(1), [1, 2, 3])
// => [2, 3, 4]
```

***

#### dec

```typescript
(n: number) => number
```

Decrement a number by 1.

```typescript
S.map(S.dec, [1, 2, 3])
// => [0, 1, 2]
```

**See also:** [inc](#inc)

***

#### divideBy

```typescript
(divisor: number, dividend: number) => number
```

Divide `dividend` by the `divisor`.

```typescript
S.map(S.divideBy(2), [1, 2, 3])
// => [0.5, 1, 1.5]
```

***

#### inc

```typescript
(n: number) => number
```

Increment a number by 1.

```typescript
S.map(S.inc, [1, 2, 3])
// => [2, 3, 4]
```

***

#### multiply

```typescript
(multiplicand: number, multiplier: number) => number
```

Multiply two numbers together.

```typescript
S.map(S.multiply(2), [1, 2, 3])
// => [2, 4, 6]
```

***

#### negate

```typescript
(n: number) => number
```

Return `n` with its sign reversed.

```typescript
S.map(S.negate, [1, 2, 3])
// => [-1, -2, -3]
```

***

#### subtractBy

```typescript
(subtrahend: number, minuend: number) => number
```

Subtract the `subtrahend` from the `minuend`.

```typescript
S.map(S.subtractBy(1), [1, 2, 3])
// => [0, 1, 2]
```

***

### Logic

#### maybe

```typescript
<T, R>(defaultValue: R, fn: (value: T) => R, maybeValue: T | undefined) => R
```

Apply `fn` to `maybeValue` if it is not `undefined`, return `defaultValue`
otherwise.

```typescript
S.maybe('', (s) => s.toUpperCase(), 'hi')
// => 'HI'

S.maybe('', (s) => s.toUpperCase(), undefined)
// => ''
```

***

#### valueOr

```typescript
<T>(defaultValue: T, value: T | undefined) => T
```

Return `value` if it is not `undefined`, `defaultValue` otherwise.

```typescript
S.valueOr(999, 0)
// => 0

S.valueOr(999, undefined)
// => 999
```

**See also:** [maybe](#maybe)

***

### Type tests

#### isArray

```typescript
<T>(value: T | unknown[]) => value is unknown[]
```

Check if the `value` is an
[`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

***

#### isBigInt

```typescript
<T>(value: T | bigint) => value is bigint
```

Check if the `value` is a
[`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

***

#### isBoolean

```typescript
<T>(value: T | boolean) => value is boolean
```

Check if the `value` is a
[`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/boolean).

***

#### isDate

```typescript
<T>(value: T | Date) => value is Date
```

Check if the `value` is a
[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

***

#### isDefined

```typescript
<T>(value: T | undefined) => value is T
```

Check if the `value` is not
[`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

***

#### isError

```typescript
<T>(value: T | Error) => value is Error
```

Check if the `value` is an
[`Error`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Error).

***

#### isFunction

```typescript
<T>(value: T | Function) => value is Function
```

Check if the `value` is a
[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions).

***

#### isMap

```typescript
<T>(value: T | Map<unknown, unknown>) => value is Map<unknown, unknown>
```

Check if the `value` is a
[`Map`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map).

***

#### isNil

```typescript
<T>(value: T | null | undefined) => value is undefined | null
```

Check if the `value` is
[`null`](https://developer.mozilla.org/en-US/docs/Glossary/null) or
[`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

***

#### isNull

```typescript
<T>(value: T | null) => value is null
```

Check if the `value` is
[`null`](https://developer.mozilla.org/en-US/docs/Glossary/null).

***

#### isNumber

```typescript
<T>(value: T | number) => value is number
```

Check if the `value` is a
[`number`](https://developer.mozilla.org/en-US/docs/Glossary/number).

***

#### isObject

```typescript
<T>(value: T | object) => value is object
```

Check if the `value` is an
[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects).

Note that functions and arrays are also objects.

***

#### isRegExp

```typescript
<T>(value: T | RegExp) => value is RegExp
```

Check if the `value` is a
[`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

***

#### isSet

```typescript
<T>(value: T | Set<unknown>) => value is Set<unknown>
```

Check if the `value` is a
[`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

***

#### isString

```typescript
<T>(value: T | string) => value is string
```

Check if the `value` is a
[`string`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String).

***

#### isSymbol

```typescript
<T>(value: T | Symbol) => value is Symbol
```

Check if the `value` is a
[`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

***

#### isUndefined

```typescript
<T>(value: T | undefined) => value is undefined
```

Check if the `value` is
[`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

***
<!-- END API -->
