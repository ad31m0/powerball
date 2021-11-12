const validator = require("validator")
const errors = {
    NOT_STRING: "Input is not a string",
    CONTAINS_NON_NUMBERS: "Input contains non numbers",
    INCORRECT_COUNT: "Input has incorrect count of numbers",
    INVALID_POWERBALL: "Input has invalid powerball number, should be between 1 and 26",
    INVALID_WHITEBALL: "Input has invalid whiteball number, should be between 1 and 69"
}

function parseGameNumbers(gameNumbersString) {
    if (typeof gameNumbersString === "string" || gameNumbersString instanceof String) {
        const numbers = gameNumbersString.split(" ")
        const allNumbers = numbers.reduce((allNumbersSoFar, number) => {
            return validator.isInt(number) && allNumbersSoFar
        }, true)
        if (allNumbers) {
            if (numbers.length == 6) {
                let powerball = validator.toInt(numbers.pop())
                if(0 > powerball || powerball > 26){
                    throw new Error(errors.INVALID_POWERBALL)
                }
                let whiteballs = numbers.map(n => {
                    const whiteball = validator.toInt(n)
                    if(0 > whiteball || whiteball > 69){
                        throw new Error(errors.INVALID_WHITEBALL)
                    }
                    return whiteball
                })
                return {
                    powerball,
                    whiteballs,
                }
            } else {
                throw new Error(errors.INCORRECT_COUNT)
            }
        } else {
            throw new Error(errors.CONTAINS_NON_NUMBERS)
        }
    } else {
        throw new TypeError(errors.NOT_STRING)
    }
}

module.exports = {
    parseGameNumbers,
    errors,
}