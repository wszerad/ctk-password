const bcrypt = require('bcryptjs');
const config = {
	hashRounds: 10
};

module.exports = {
	/**
	 * @param {object} options
	 * @param {number} options.hashRounds
	 */
	setup(options) {
		Object.assign(config, options);
	},
	/**
	 * @param password
	 * @param hash
	 * @returns {Promise}
	 */
	compare(password, hash) {
		return bcrypt.compare(password, hash);
	},
	/**
	 * @param {string} password
	 * @returns {Promise}
	 */
	hash(password) {
		return bcrypt.hash(password, config.hashRounds);
	}
};