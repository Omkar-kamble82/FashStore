import { addCart } from '../controllers/StoreController';
const express = require('express');

const router = express.Router()

router.get('/', getAssets)

module.exports = router