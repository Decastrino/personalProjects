const fs = require('fs').promises
// promises lets us use the asyn and await functionality for asynchronous processing

// Load fs module and inspect file details with stat(), isFile(), isDirectory() methods
const getStats = async (path) => {
    try{
        const stats = await fs.stat(path);
        console.log(stats)

        if (stats.isFile()){
            console.log(`Passed path ${path} is a file`)
        } else {
            console.log(`Passed path ${path} is a directory`)
        }
    } catch (error) {
        console.log(error)
    }
}

// Read contents of a file
const readFile = async (path) => {
    try{
        const content = await fs.readFile(path, "utf-8")
        console.log(content)

    } catch (error) {
        console.log(error)
    }
}

// Write contents to a file
const writeFile = async (path, content) => {
    try {
        await fs.writeFile(path, content)
    } catch (error) {
        console.log(error)
    }
}

// Append to a file
const appendFile = async (path, content) => {
    try {
        await fs.appendFile(path, content)
    } catch (error) {
        console.log(error)
    }
}



//getStats("../nodejs-api")
getStats("./test.txt")
writeFile("./write.txt", "Writing practice is awesome")
readFile("./write.txt")
appendFile("./write.txt", "\nAppenended extra lines to file")
let a = readFile("./write.txt").then((res) => console.log(res)); 
console.log(a)