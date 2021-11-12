const {parseGameNumbers, errors} = require('../../../app/helpers/parse-game-numbers')

test('parseWinningNumbersString', () => {
    expect(parseGameNumbers("1 2 3 4 5 6")).toEqual({powerball: 6, whiteballs: [1, 2, 3, 4, 5]})
})

test('CONTAINS_NON_NUMBERS', () => {
    expect(parseGameNumbers("1 2 3 4 5 f")).toThrow(errors.CONTAINS_NON_NUMBERS)
})

test('INCORRECT_COUNT', () => {
    expect(parseGameNumbers("1 2 3 4 5")).toThrow(errors.INCORRECT_COUNT)
})

test('NOT_STRING', () => {
    expect(parseGameNumbers(null)).toThrow(errors.NOT_STRING)
})