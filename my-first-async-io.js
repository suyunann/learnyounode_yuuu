const fs = require("fs");
const path = process.argv[2];
fs.readFile(path, "utf8", function callback(err, data) {
    if (err) {
        return console.log(err)
      }
 console.log(data.split('\n').length-1)
});

