var thought = require('through'),
    tr = thought(write);

function write(buf) {
    if(Buffer.isBuffer(buf)) {
        buf = buf.toString();
    }

    this.queue(buf.toUpperCase());
}

process.stdin.pipe(tr).pipe(process.stdout);
