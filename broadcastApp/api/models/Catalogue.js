/**
 * @class Catalogue
 *
 * Model for  Catalogue
 */
module.exports = {

	attributes: {

		products: {
			collection: 'product',
			via: 'catalogue',
			required: false
		}

	}
};