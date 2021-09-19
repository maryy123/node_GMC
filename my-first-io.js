const fs=require("fs")
const buffer=fs.readFileSync(process.argv[2])
const nbLines=buffer.toString().split("\n").length -1
console.log(nbLines)

