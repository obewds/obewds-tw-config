// ./tests/ObewdsTwConfig.test.js

import ObewdsTwConfig from '@/data/obewds-tw-config'



test('ObewdsTwConfig component imports successfully', async () => {

    expect(ObewdsTwConfig).toBeTruthy()

})



test('ObewdsTwConfig can be modified with a new bg palette color primary value', async () => {

    let config = ObewdsTwConfig
    let testClass = 'test-class another-class'
    
    config.bg.palettes.default.colors.primary = testClass

    let result = JSON.stringify(config)

    expect(result).toContain(testClass)

})



test('ObewdsTwConfig can be extended with a new bg palette color', async () => {

    let config = ObewdsTwConfig
    let testKey = 'testKey'
    let testClass = 'test-class'

    config.bg.palettes.default.colors[testKey] = testClass

    let result = JSON.stringify(config)

    expect(result).toContain(testKey)
    expect(result).toContain(testClass)
    
})



test('ObewdsTwConfig can be extended with a new bg palette and color', async () => {

    let config = ObewdsTwConfig
    let testPalette = 'test-palette'
    let testKey = 'test-key'
    let testClass = 'test-class another-class'
    let palette = {
        colors: {}
    }

    palette.colors[testKey] = testClass
    config.bg.palettes[testPalette] = palette

    let result = JSON.stringify(config)

    expect(result).toContain(testPalette)
    expect(result).toContain(testKey)
    expect(result).toContain(testClass)

})
