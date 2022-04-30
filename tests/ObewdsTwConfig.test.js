// ./tests/ObewdsTwConfig.test.js

import { mount } from '@vue/test-utils'
import ObewdsTwConfig from '../src/components/ObewdsTwConfig.vue'



test('ObewdsTwConfig.vue component mounts successfully', async () => {

    expect(ObewdsTwConfig).toBeTruthy()

})



test('ObewdsTwConfig.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(ObewdsTwConfig, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('ObewdsTwConfig.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(ObewdsTwConfig, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
