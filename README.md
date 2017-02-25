``` js

const config = require('ctk-config')({
        password: {
            hashRounds: 10
        }
    });

const password = require('ctk-password');

password.hash(password)// => Promise(hash)
password.compare(password, hash)// => Promise(equal)

```