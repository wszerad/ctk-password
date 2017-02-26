const bcrypt = require('bcryptjs');
const config = {
	hashRounds: 10
};

function password(options) {
	Object.assign(config, options);
}

password.compare = function(password, hash) {
	return bcrypt.compare(password, hash);
};

password.hash = function(password) {
	return bcrypt.hash(password, config.hashRounds);
};

module.exports = password;