const { Schema, model } = require('mongoose')

const Joi = require("joi");

const {handleMongooseError} = require("../utils");

const contactSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Set name for contact'],
		},
		email: {
			type: String,
		},
		phone: {
			type: String,
		},
		favorite: {
			type: Boolean,
			default: false,
		},
	},
	{ versionKey: false, timestamp: true }
)

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
	name: Joi.string().required().min(3),
	email: Joi.string().required().email(),
	phone: Joi.string().required().min(5),
	favorite: Joi.boolean(),
})

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
})

const schemas = {
    addSchema,
    updateFavoriteSchema,
}


const Contact = model('contact', contactSchema)


module.exports = {
	Contact,
	schemas,
}