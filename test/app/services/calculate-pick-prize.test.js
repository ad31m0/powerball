const {calculatePickPrize} = require("../../../app/services/calculate-pick-prize")
test('no win', () => {
    expect(calculatePickPrize(
        {
            powerball: 1,
            whiteballs: [1, 2, 3, 4, 5]
        },
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        1
    )).toEqual(0)
})

test('3 nums no powerball', () => {
    expect(calculatePickPrize(
        {
            powerball: 1,
            whiteballs: [12, 30, 59, 4, 5]
        },
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        1
    )).toEqual(7)
})



test('4 nums no powerball', () => {
    expect(calculatePickPrize(
        {
            powerball: 1,
            whiteballs: [12, 30, 59, 65, 5]
        },
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        1
    )).toEqual(100)
})

test('5 nums no powerball', () => {
    expect(calculatePickPrize(
        {
            powerball: 1,
            whiteballs: [12, 30, 59, 65, 69]
        },
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        1
    )).toEqual(1000000)
})

test('no balls but powerball', () => {
    expect(calculatePickPrize(
        {
            powerball: 16,
            whiteballs: [1, 2, 3, 4, 5]
        },
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        1
    )).toEqual(4)
})

test('1 number plus powerball', () => {
    expect(calculatePickPrize(
        {
            powerball: 16,
            whiteballs: [12, 2, 3, 4, 5]
        },
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        1
    )).toEqual(4)
})

test('2 numbers plus powerball', () => {
    expect(calculatePickPrize(
        {
            powerball: 16,
            whiteballs: [12, 30, 3, 4, 5]
        },
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        1
    )).toEqual(7)
})

test('4 numbers plus powerball', () => {
    expect(calculatePickPrize(
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 5]
        },
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        1
    )).toEqual(50000)
})

test('5 numbers plus powerball', () => {
    expect(calculatePickPrize(
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        {
            powerball: 16,
            whiteballs: [12, 30, 59, 65, 69]
        },
        1
    )).toEqual(293000000)
})
