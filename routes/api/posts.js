const express = require('express')
const Joi = require('joi')
const { postValidation } = require('../../middleware/postValidationSchema')
const { getAllPosts, getPostById, changePostById, deletePostById } = require('../../controllers/postsControllers')
const router = express.Router()

router.get('/', getAllPosts)

router.get('/:id', getPostById)

router.post('/', postValidation,)

router.put('/:id', changePostById)

router.delete('/:id', deletePostById)

module.exports = router