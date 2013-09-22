var fs = require('fs'),
    fpath = process.argv[2];

if(fpath && fs.existsSync(fpath)) {
    fs.createReadStream(fpath).pipe(process.stdout);
}
