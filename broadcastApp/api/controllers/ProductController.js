/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getProducts: function(req, res) {
		var location = req.param('location'),
			national = 6;

		Product.find({
			location: [national, location]
		}).exec(function(err, record) {
			return res.json(record);
		});

	}

};