const express = require('express')
const {checkTicketController} = require("../controllers/check-ticket-controller")
const {checkTicketSchemaMiddleware} = require("../middleware/check-ticket-schema-middleware")
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')


const router = express.Router()

// Routes
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));
router.post('/checkTicket', checkTicketSchemaMiddleware, checkTicketController)
// Fall Through Route


module.exports = router