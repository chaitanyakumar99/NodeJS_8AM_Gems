import fs from 'fs'

let filecontent=fs.readFileSync('data.txt','utf-8')
console.log(filecontent)