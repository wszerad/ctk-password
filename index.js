const bcrypt = require('bcryptjs');
const config = require('ctk-config');
const hashRounds = (config.password && config.password.hashRounds) || 10;


module.exports = {
	compare(password, hash) {
		return bcrypt.compare(password, hash);
	},
	hash(password) {
		return bcrypt.hash(password, hashRounds);
	}
};