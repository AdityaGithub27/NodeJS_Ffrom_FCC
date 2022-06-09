const path = require("path")

console.log("path...",path.sep);
const filePath=path.join('/textCheck_FCC','subFolder','text.txt');
console.log(filePath);

const base=path.basename(filePath);
console.log(base);