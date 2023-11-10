const { addCart, getCart, removeItem, emptyCart } = require('../controllers/StoreController')
const express = require('express');

const router = express.Router()

router.post('/addcart', addCart)
router.get('/:username', getCart)
router.put('/updatecart', removeItem)
router.put('/deletecart', emptyCart)

module.exports = router