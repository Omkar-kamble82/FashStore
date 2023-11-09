const Store = require('../models/StoreModel')

const addCart = async (req, res) => {
    const {email, username, cart, id} = req.body
    try {
        const user = await Store.findOne({ username: username })
        if(user) {
            const objid = user._id
            const userStore0 = await Store.findByIdAndUpdate({ _id: objid }, {
                    $push: {
                        cart : cart
                    },
                    $push: {
                        ids : id
                    },
                },
                { new: true }
            );
            const userStore = await Store.findByIdAndUpdate({ _id: objid }, {
                    $push: {
                        cart : cart
                    }
                },
                { new: true }
            );
            res.status(200).json(userStore)
            return 
        }
        const userStore = await Store.create({ email, username, cart: [cart] , ids: [id]})
        res.status(200).json(userStore)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getCart = async (req, res) => {
    const { username } = req.params
    try {
        const user = await Store.findOne({ username: username})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { addCart, getCart}