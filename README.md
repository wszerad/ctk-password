``` js
//one file
password.setup({
    hashRounds: 10
});

//others
password.hash(password)// => Promise(hash)
password.compare(password, hash)// => Promise(equal)

```