// ./scripts/update.js

const fs = require('fs-extra')
const merge = require('lodash.merge');
const ObewdsTwConfig = require('../dist/obewds-tw-config.cjs.js')
//const clientConfigPath = './obewds.tw.config.json' // dev version
const clientConfigPath = '../../../obewds.tw.config.json'
const defaultConfig = ObewdsTwConfig.ObewdsTwConfig

try {

    if (fs.existsSync(clientConfigPath)) {

        const clientConfig = require('.' + clientConfigPath)

        const mergedConfig = merge(defaultConfig, clientConfig)

        fs.outputFile(clientConfigPath, JSON.stringify(mergedConfig, null, 4), err => {

            if (err) {
        
                console.log(err)
        
            } else {
        
                console.log(' ')
                console.log('*\\o/* ' + 'Updated and merged ./obewds.tw.config.json file successfully. Happy coding!' + ' *\\o/*')
                console.log(' ')
        
            }
            
        })

    } else {

        // if the client config is not found then install the default config (same as ./install.js)

        fs.outputFile(clientConfigPath, JSON.stringify(ObewdsTwConfig.ObewdsTwConfig, null, 4), err => {
        
            if (err) {
        
                console.log(err)
        
            } else {
        
                console.log(' ')
                console.log('*\\o/* ' + 'Installed ./obewds.tw.config.json file. Happy coding!' + ' *\\o/*')
                console.log(' ')
        
            }
            
        })

    }

} catch(err) {

    console.error(err)

}
