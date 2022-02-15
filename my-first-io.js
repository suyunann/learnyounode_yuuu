const fs = require("fs");
const file = fs.readFileSync(process.argv[2]);
const str = file.toString().split('\n').length - 1;
console.log(str);

