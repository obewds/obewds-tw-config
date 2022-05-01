// ./scripts/install.js

const fs = require('fs-extra')
const ObewdsTwConfig = require('../dist/obewds-tw-config.cjs')

//const outputFileDev = "./obewds.tw.config.json"
const outputFile = "../../../obewds.tw.config.json"

const outputJson = JSON.stringify(ObewdsTwConfig.ObewdsTwConfig, null, 4)

fs.outputFile(outputFile, outputJson, err => {

    if (err) {

        console.log(err) // => null

    } else {

        console.log(' ')
        console.log('*\\o/* ' + 'Installed ./obewds.tw.config.json file. Happy coding!' + ' *\\o/*')
        console.log(' ')

    }
    
})
