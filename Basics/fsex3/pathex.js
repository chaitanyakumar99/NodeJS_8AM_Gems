//how to find current working dir
//how to find current working file
//const path = require('path')
import path from 'path'
console.log(path.join(__dirname))
console.log(path.join(__filename))
console.log(path.join(__dirname,"emp","bangalore","data.txt"))