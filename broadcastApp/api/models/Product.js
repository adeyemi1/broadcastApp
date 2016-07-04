'use strict';
/**
 * @class Product
 *
 * Model for  Product
 */

module.exports = {

	attributes: {

		name: {
			type: 'string',
			required: true
		},

		location: {
			model: 'location',
			required: false
		},
		category: {
			model: 'category',
			via: 'id',
			required: true
		},
		catalogue: {
			model: 'catalogue'
		}
	}
};