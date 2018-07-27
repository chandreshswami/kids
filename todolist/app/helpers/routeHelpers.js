var Joi = require('joi');

module.exports = {
	validateBody: function(schema) { 
		return function(req, res, next) {
			console.log("req.body---1",req.body)
			var result = Joi.validate(req.body, schema);
			if(result.error) {
				return res.status(400).json(result.error);
			}

			if(!req.value) {
			  req.value = {};
			}
			req.value['body'] = result.value;
			console.log("req.value['body'] --2",req.value['body']);
			next();
		}
	},
	schemas: {
		taskSchema: Joi.object().keys({
			name: Joi.string().required(),
			details: Joi.string().required(),
			status: Joi.array().items(Joi.string().valid('pending', 'ongoing', 'completed')).single()

		})
	}
}