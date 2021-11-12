// Hello World on '/'
const {validationResult} = require("express-validator")
const {checkTicketService} = require("../services/check-ticket-service")

async function checkTicketController(req, res) {
    try {
        validationResult(req).throw()
    } catch (error) {
        res.status(422).json(error.mapped())
        return
    }
    const {date, picks} = req.body
    const winResult = await checkTicketService({date, picks})
    res.json({status: "success", result: winResult})
}

module.exports = {
    checkTicketController
}