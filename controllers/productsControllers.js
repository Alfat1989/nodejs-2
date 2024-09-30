const { v4 } = require('uuid')
const { products } = require('../data/products')

const getAllProducts = (req, res) => {
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    })
}

const getProductsById = (req, res) => {
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
}

module.exports = {
    getAllProducts,
    getProductsById
}