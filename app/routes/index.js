const express = require('express')
const {checkTicketController} = require("../controllers/check-ticket-controller")
const {checkTicketSchemaMiddleware} = require("../middleware/check-ticket-schema-middleware")

const router = express.Router()

// Routes

router.post('/checkTicket', checkTicketSchemaMiddleware, checkTicketController)
// Fall Through Route


module.exports = router