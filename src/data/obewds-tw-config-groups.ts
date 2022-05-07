const tuple = <T extends string[]>(...args: T) => args

// DEVS: These values need to (manually) match the top level keys in ./obewds-tw-config.ts!
let ObewdsTwConfigGroups = tuple(
    'anchor',
    'bg',
    'border',
    'button',
    'text',
)

//
// To use in a module declare a new type/typeof using the export
// and use a type number for the key to grab the tuples
// REF: https://stackoverflow.com/questions/44497388/typescript-array-to-string-literal-type
// EXAMPLE:
// type DesignSystemGroups = typeof ObewdsTwConfigGroups[number]
//

export default ObewdsTwConfigGroups
