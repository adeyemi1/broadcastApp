'use strict';
/**
 * @class Customer
 *
 * Model for  Customer
 */

module.exports = {

	attributes: {

		identifier: {
			type: 'integer',
			required: true,
			unique: true
		},
		name: {
			type: 'string',
			required: true
		},
		location: {
			model: 'Location',
			required: true
		}

	}
};