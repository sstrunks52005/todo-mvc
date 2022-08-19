const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// router gets the controller which is a GET. 
router.get('/', homeController.getIndex) 

module.exports = router