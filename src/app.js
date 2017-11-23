const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

fs.writeFile(path.join(__dirname, "/files/test"), "Hey there!", function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
})


setTimeout(function() {
    rimraf(path.join(__dirname, "/files/test"), (err) => {
        if (err) { throw err; }
        console.log("File deleted!")
    })
}, 3000)