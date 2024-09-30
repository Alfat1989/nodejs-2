const express = require('express')
const { books } = require('../../data/products')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        status: "success",
        code: 200,
        data: {
            resuly: books
        }
    })
})

module.exports = router

