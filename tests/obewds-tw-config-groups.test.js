// ./tests/obewds-tw-config-groups.test.js

// import ObewdsTwConfig from '@/data/obewds-tw-config'
import ObewdsTwConfigGroups from '@/data/obewds-tw-config-groups'



test('ObewdsTwConfigGroups component imports successfully', async () => {

    expect(ObewdsTwConfigGroups).toBeTruthy()

})



test('ObewdsTwConfigGroups can be modified with a new top level key (intended to be used to extend an ObewdsTwConfig object in an end application)', async () => {

    let designSystemKeys = ObewdsTwConfigGroups
    let newKey = 'companyComponent'

    designSystemKeys.push(newKey)

    expect(designSystemKeys).toContain(newKey)

})
