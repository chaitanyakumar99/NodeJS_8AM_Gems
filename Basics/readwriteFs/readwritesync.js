const fs = require('fs')
let empdata=fs.readFileSync('emp.txt','utf-8')
fs.writeFileSync('data.txt',empdata)
console.log("Employee Data write into new file ie data.txt")