var crypto = require('crypto'),
    pwd = process.argv[2];

process.stdin
    .pipe(crypto.createDecipher('aes256', pwd))
    .pipe(process.stdout);
