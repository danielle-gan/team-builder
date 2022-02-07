const fs = require('fs');

const writeFile = file => {
        fs.writeFile('./dist/index.html', file, (err) => {
            if (err) {
              console.log("error", err)
              throw new Error("error writing file")
            } 
          }
        )
};

module.exports = {writeFile}