const { addCart, getCart } = require('../controllers/StoreController')
const express = require('express');

const router = express.Router()

router.post('/addcart', addCart)
router.get('/:username', getCart)

module.exports = router