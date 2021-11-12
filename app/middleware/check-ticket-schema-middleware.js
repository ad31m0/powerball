const {checkSchema} = require("express-validator")
const {parseGameNumbers} = require("../helpers/parse-game-numbers")

const checkTicketSchemaMiddleware = checkSchema({
    date: {
        isDate: true,
        toDate: true,
    },
    picks: {
        isArray: {
            options: {
                min: 1
            },
        },
    },
    "picks.*": {
        custom: {
            options : (value)=>{
                return parseGameNumbers(value)
            }
        }
    }
})
module.exports  = {
    checkTicketSchemaMiddleware
}