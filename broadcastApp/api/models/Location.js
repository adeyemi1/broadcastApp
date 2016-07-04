'use strict';
/**
 * @class Location
 *
 * Model for  Location
 */

module.exports = {

	attributes: {
		name: {
			type: 'string',
			required: true
		},
		code: {
			type: 'string',
			required: false
		}

	}
};