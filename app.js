const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const productsRouter = require('./routes/api/products')
const booksRouter = require('./routes/api/books')
const postsRouter = require('./routes/api/posts')

const PORT = process.env.PORT || '3000'

const app = express()
app.use(express.json())
app.use(morgan('tiny'))

app.use(cors())

app.use((req, res, next) => {
    console.log('First middleware')
    next()
})

app.use('/api/products', productsRouter)
app.use('/api/books', booksRouter)
app.use('/api/posts', postsRouter)


app.listen(PORT, () => {
    console.log('Server is running')
})