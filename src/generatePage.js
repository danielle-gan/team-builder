const fs = require('fs');

const writeFile = fileContent => {
        fs.writeFile('./dist/index.html', fileContent, (err) => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
              console.log("error", err)
              throw new Error("error writing file")
            } 
          }
        )
};

module.exports = {writeFile}