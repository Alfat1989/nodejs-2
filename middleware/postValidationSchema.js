const Joi = require('joi')

const postValidation = (req, res, next) => {
    const schema = Joi.object({
        topic: Joi.string().required().min(3).max(40).alphanum(),
        text: Joi.string().required().min(10).max(400).alphanum()
    })

    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
        return res.status(400).json({
            status: validationResult.error.details
        })
    }

    next()
}

module.exports = {
    postValidation
}