const fs = require("fs");
const path =require('path');
const road = process.argv[2];
const extName = process.argv[3];

fs.readdir(road, function callback(err, data) {
  if (err) return console.log(err);
  for (let i = 0; i <= data.length - 1; i++) {
    if (path.extname(data[i]) === "." + extName) {
      console.log(data[i]);
    }
  }
});
