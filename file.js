var fs = require('fs');
let fileName='help.txt';

function write(fileName,cb) {
    fs.writeFile('./'+fileName, 'this is our second sample', function (err, done) {
        if (err) {
            console.log('file writing error');
            cb(err);
        }
        else {
            console.log('file writing success');
            cb(null, done);
        }

    });
}

function read(cb) {
    fs.readFile('help.txt', 'UTF-8', function (err, done) {
        if (err) {

            console.log('file writing error');
            cb(err);
        }
        else {
            console.log('file reading success');
            cb(null, done);
        }

    });
}
function rename(cb) {
    fs.rename('help.txt', 'new.txt', function (err, done) {
        if (err) {
            console.log('renaming error');
            cb(error);
        }
        else {
            console.log('file renaming success');
            cb(null, done);
        }
    })
}

module.exports = {
    read: read,
    rename: rename,
    write:write


}






