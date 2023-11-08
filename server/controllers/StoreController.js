const Store = require('../models/StoreModel')
const mongoose = require('mongoose')

export const addCart = async (req, res) => {
    const user_email = req.email
    const user_username = req.username
    const cart = req.cart
    try {
        const user = await Store.findOne({username: user_username})
        if(user) {
            const user = await Store.findByIdAndUpdate({username: user_username}, {
                $push: {
                    following: id
                },
            },
            { new: true }
        );
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

