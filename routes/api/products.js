const express = require('express')
const { v4 } = require('uuid')
const { products } = require('../../data/products')
const { getAllProducts } = require('../../controllers/productsControllers')
const router = express.Router()

router.get('/', getAllProducts)

router.get('/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(item => item._id === id)
    if (!product) {
        res.json({
            status: "error",
            code: 404,
            data: `Producy with id=${id} not found`
        })
    }

    res.json({
        status: "success",
        code: 200,
        data: {
            result: product
        }
    })
})

router.post('/', (req, res) => {
    const data = req.body
    const newProduct = { _id: v4(), ...data }
    products.push(newProduct)
    res.json({
        status: 'success',
        code: 201,
        data: {
            result: newProduct
        }
    })
})

module.exports = router