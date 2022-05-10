---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


# @obewds/obewds-tw-config

Welcome to the docs page for OBE:WDS's `ObewdsTwConfig` component for modular Design Systems!




## Preface

This package is essentially a foundational layer for a two-part goal.

::: info GOAL ONE
The first goal is to reduce the average string length (and cognative load) of using atomic CSS classes at scale in production web applications.

The solution is simple: extract common patterns **in groups of atomic CSS classes** and provide them globally. The craft lies in which characterists to abstract. For example, extracting the following makes sense:

* Globally consistent brand, color, typographic and accessibility characteristics
* Repeated layout or structural CSS class groups
* Globally consistent edge of screen paddings or margins
* Repeated flexbox and CSS grid gutter spacing classes
* Any repeated strings that just show up as we build awesome things and iterate to great solutions!
:::

Besides, who doesn't want DRYness coupled with intuitive iterative control over our sets of atomic classes? That really comes in handy whenever:

* Rapid prototyping
* Performing production app maintenance 
* Doing rush "formatting" patches (we've all been there)
* Incremental design refinements
* On-going accessibility maintenance/improvements

Now let's talk about the hero level role that the FEDs play in the evolution of our awesome web apps in the second goal of this approach!

::: info GOAL TWO
The second goal is to make this solution in a way that allows front end developers:

* Fully type defined and type hinted components (yay TypeScript!)
* A base structure that is ready to handle dynamic state changes as they pertain to end-user visual aesthetics
* A base structure to use to keep brand-centric and aesthetically flexible details seperate from more functional and programmatic component structures
* Flexible and easy to integrate components
* Exhaustive documentation (yay VitePress!)
* Deconstructable and recomposable modularity
* Tree shaking friendly (yay Rollup.js!)
* ES Module and Node.js friendly
* Fully tested with 100% coverage components (yay Vitest!)
* Ideally using next-gen tooling that's as fast as possible (yay Vite.js!)
:::

However to accomplish those goals realistically in the wild, the design/marketing/branding side of things are going need a straight forward (and human readable) way to "see" exactly how brand-level characteristics across an application "feel". 

They are also going to need to be able to consistently tweak those characteristics to refine designs into both beautiful and accessable solutions... without being all up in the front enders business all of the time.

That's where this package kicks in!

It's a foundational piece of simple code meant to provide both sides of the design and development coin the structure, space and interoperability needed to be their best and deliver consistently strong work together!

> What's cool is ultimately these goals are achievable by identifying patterns and a judicious obsession for a DRY front end code base, along with a healthy obsession for a design system that works out-of-the-box for rapid prototyping, but has a fully focused production web app mindset!

<br>





## Package Installation

```bash
npm install @obewds/obewds-tw-config --save-dev
```

<br>










## Installing Config File

Next up, you can run an install script to bring the module output data from this package into your project directly, to allow you to edit/customize defaults specific to your app, and serve as a data source for both your Tailwind CSS config file and your OBE:WDS components.

This can be accomplished easily using `npm explore`:

```bash
npm explore @obewds/obewds-tw-config -- npm run install:config
```

You should now have a file in your root directory (`./obewds.tw.config.json`) that you can use, reference, include in Tailwind CSS config arrays, and more!

<br>





## Updating Config Versions

You can also use this package to update an existing project `./obewds.tw.config.json` defaults file to bring in any new data defaults for new components available in the overall OBE:WDS component system. The update process is really similar to installing a config file.

First off, go ahead and uninstall your existing version of this package and reinstall the package to the newest version:

```bash
npm uninstall @obewds/obewds-tw-config && npm install @obewds/obewds-tw-config --save-dev
```

Next up, you can run an update script that will check for an existing `./obewds.tw.config.json` file, and if found, **will merge** that existing app config file with any new or missing defaults from this package using [lodash.merge()](https://lodash.com/docs/#merge) under the hood.

Use this command to update and merge new config defaults into your existing `./obewds.tw.config.json` file:

```bash
npm explore @obewds/obewds-tw-config -- npm run update:config
```

::: danger PLEASE NOTE
If no `./obewds.tw.config.json` file is found, the update script will install a new one (just like the `install:config` command does).
:::

You should now have an updated and merged `./obewds.tw.config.json` file, now with any new defaults and any customizations you've made prior, all retained in your root directory defaults config file!

<br>





## Tailwind Config Setup

Tailwind CSS needs to be made aware of your new `./obewds.tw.config.json` file and it's global CSS classes, so they end up included in built/JIT output files. 

### Using OBE:WDS Tailwind Defaults (Prototyping)

Making Tailwind CSS aware of the OBE:WDS default Tailwind CSS classes nested inside project `node_modules` is a one-liner in Tailwind's `content` inclusion array:

```javascript
// ./tailwind.config.js

module.exports = {
    
    // ENSURE darkMode IS SET TO 'class' MODE (TO SEE/USE DEFAULT DARK/LIGHT MODE CLASSES)
    darkMode: 'class',

    content: [
        // ...
        // PROVIDES TAILWIND OBE:WDS DEFAULT DESIGN SYSTEM CLASSES
        "./node_modules/@obewds/obewds-tw-config/dist/*.js",
    ],
    // ...
}
```

::: danger DESIGN SYSTEM INTENT
This option is mainly used for **rapid prototyping**, **initial component installs** and **project kickoff's**! Final applications should generally be using customized classes to fit the branding of the app via the `./obewds.tw.config.json` file file (below)!

So always be sure the node_modules inclusion above is still needed for production output if you're using a `./obewds.tw.config.json` file, otherwise you will end up with classes you aren't using in your final output Tailwind file!
:::

### Using an OBE:WDS Tailwind Config File (Production)

Making Tailwind CSS aware of your project's on-going OBE:WDS Tailwind CSS design system file in your root directory needs to be included differently. 

In this case, we'll need to use the `safelist` property and add a little processing to hand-off the data to Tailwind to parse for class matches. It's still a one-liner, but it looks more like this now thanks to Tailwind's inclusion of the `safelist` property:

```javascript
// ./tailwind.config.js

module.exports = {
    // ...
    safelist: [
        // Include to ensure TW can parse all app config default classes
        JSON.stringify(require('./obewds.tw.config.json'), null, 0),
    ],
    // ...
}
```

::: danger DESIGN SYSTEM INTENT
This option is mainly used for **on-going development** and **production** applications!

So basically, this file should be extensively customized to befit a project's branding and visual-related state classes - both depending on any of your own component logic derived from additions you make to your `./obewds.tw.config.json` file, and any out-of-the-box defaults you modify in use with any OBE:WDS components.
:::

<br>






## App Config Setup

In modern ES Module contexts, the new `./obewds.tw.config.json` defaults file will be automatically converted into a usable JavaScript object when imported. 

That means if we want to use our new `./obewds.tw.config.json` file programatically, we can import it into an ESM context like this:

```javascript
// assuming we're including into a file that's also in the root directory
import tw from './obewds.tw.config.json'
```

Conversely, the same can be accomplished in Node.js (CommonJS) contexts, by switching to the require() syntax:

```javascript
// assuming we're including into a file that's also in the root directory
let tw = require('./obewds.tw.config.json')
```


::: tip IMPORT BEST PRACTICES
* Call your import whatever you want
* But `'tw'` is the internal/common convention!
* And `'tw'` is used/required for OBE:WDS Vue components that use `provide()`/`inject()` inherently!
:::

<br>






## A Vue.js Use Example

Let's take a look at using the `./obewds.tw.config.json` defaults file in a Vue.js app context.

To start out, let's consider a default Vue + Tailwind + Vite app initialization file containing something along the lines of:

```javascript
import { createApp } from 'vue' // the vue framework
import App from './App.vue' // a primary view/page component
import './assets/index.css' // a Tailwind CSS base file (with @tailwind base etc.)

const app = createApp(App) // creating the app instance

app.mount('#app') // mounting the app to the DOM
```

With that code in mind, we're going to want to import two bits of code:

1. Our app `./obewds.tw.config.json` data
1. The `mergeAppConfigWithDefaults()` helper function to sync/merge any component classes needed for components but possibly not in the `./obewds.tw.config.json` file

We can import both like this:

```javascript
import { mergeAppConfigWithDefaults } from '@obewds/vue-component-helpers'
import appTwConfig from '../obewds.tw.config.json'
```

With our newly imported code, we can combine them in a simple line of code to get our app ready for rapid development with:

```javascript
const tw = mergeAppConfigWithDefaults(appTwConfig)
```

Next up and in the contexts of a Vue.js app, we can make our merged config classes data available globally for components, by leveraging Vue.js's awesome `provide()` pattern like this:

```javascript
app.provide('tw', tw)
```

Putting everything together, our Vue app's initialization files now looks something like this:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

import { mergeAppConfigWithDefaults } from '@obewds/vue-component-helpers' // WooHoo!
import appTwConfig from '../obewds.tw.config.json' // WooHoo!

const app = createApp(App)

const tw = mergeAppConfigWithDefaults(appTwConfig) // WooHoo!

app.provide('tw', tw) // WooHoo!

app.mount('#app')
```

And this of course means we can use our provided data in a Vue component, like this:

```html
<template>
    <div :class="primaryBg">
        <slot/>
    </div>
</template>
<script setup lang="ts">
    const tw = inject('tw')
    const primaryBg = tw.bg.palettes.default.color.primary
</script>
```

::: danger ABOUT THE 'tw' KEY
Currently all OBE:WDS + Tailwind CSS focused Vue.js components and design systems will use and expect the specific **provided** key of `'tw'` within components and design system component sets.

So if you're using Tailwind CSS and OBE:WDS together with Vue.js, you will **almost always** want to use the `'tw'` key on **both** the Vue `provide()` and `inject()` sides of things to override default classes used by OBE:WDS components for rapid prototyping, and instaed use your app and brand specific classes that you define uniquely to your app!
:::

<br>




## Programmatic Customization

In some cases, an end application will heavily modify or even fully replace (and extend) the default `./obewds.tw.config.json` file. 

This is ultimately trivial, because we're really just dealing with objects of keys/values. However the structure is defined for use with components with built-in design system centric features, so thankfully TypeScript is available to help guide programmatic customization.

::: info TYPESCRIPT IS THE RIGHT SCRIPT
It's worth noting that this package has first class support for TypeScript being that it's written in... TypeScript, so your IDE can be extremely helpful when customizing your OBE:WDS + Tailwind CSS design system config data!
:::

Let's look at some simple examples just to illustrate the flexibility and intent of use.

### Changing Default Colors Example

For many apps, the standard palette color keys/names of `default`, `primary`, `secondary`, `error`, and `success` are good starting points. Editing these defaults are as simple as assigning a new value to an object property!

To demonstrate, let's import the package and assign it to a variable like so:

```javascript
// Example in a Vite/Vue app context
import twDefaults from '../obewds.tw.config.json'

let tw = twDefaults
```

Next up, we can now use our `myTwConfig` variable to access and update each of the default text palette colors like so:

```javascript
tw.text.palettes.default.colors = {
    "default": 'text-black dark:text-white',
    primary: 'text-amber-500 dark:text-amber-200',
    secondary: 'text-indigo-500 dark:text-indigo-200',
    error: 'text-rose-500 dark:text-rose-200',
    success: 'text-emerald-500 dark:text-emerald-200'
}
```

And of course, we'll still need to `provide()` our data to our app, so we can now do this using our extended defaults like so:

```javascript
app.provide('tw', tw)
```

Which means in any app component, we can now access our new default palette primary text color like this:

```html
<template>
    <div :class="primaryText">
        I have the primary default text palatte color classes!
    </div>
</template>
<script setup lang="ts">
    const tw = inject('tw')
    const primaryText = tw.text.palettes.default.colors.primary
</script>
```



### Adding A Default Palette Color Example

In most cases, an app will customize most if not all of the base/config starting data from this package. So let's look at how that would work IRL.

For example, let's consider our tiny Vue.js app example above, let's start out by again importing the default data from this package:

```javascript
// Example in a Vite/Vue app context
import twDefaults from '../obewds.tw.config.json'
```

But this time, instead of providing the defaults directly to the app, let's extend the defaults a bit!

To get started with extending the default data, we'll want to assign the default data to a variable like so:

```javascript
let tw = twDefaults
```

Now we can use our `myTwConfig` variable to get started with extending the defaults. Let's add a new background color name with a value containing some new Tailwind CSS background focused classes:

```javascript
tw.bg.palettes.default.colors.midnight = 'bg-indigo-600 dark:bg-indigo-300'
```

And of course, we'll still need to `provide()` our data to our app, so we can now do this using our extended defaults like so:

```javascript
app.provide('tw', tw)
```

And now we can use our new `midnight` color classes (DRYly :partying_face:) anywhere in our imaginary Vue.js example app!

::: tip DESIGN SYSTEM INTENT
In the `midnight` color classes example above, notice the use of Tailwind CSS `dark:` prefixed classes. If you don't know already, that's the "class" method of using dark mode in Tailwind CSS.

So it's worth mentioning now, that much of the inspiration for this workflow and approach comes from the PITA nature of not just dealing with long strings of atomic classes, but also the 30-50% more of them needed for something awesome like dark mode!

So the approach of this solution to that problem is ultimately meant to make things easier to manage and iterate through the evolution of an app from initial prototyping workflows to final production workflows!
:::




### Adding A New Palette Example

Adding a new Palette (of colors, so adding a new palette and colors to be exact), is similar to extending a default palette, but with a little more complexity.

So let's add a new palette to our **bg** defaults! To start, can simply define our new palette directly on a variable instance of the package payload like this:

```javascript
// Example in a Vite/Vue app context
import twDefaults from '../obewds.tw.config.json'

let tw = twDefaults

tw.bg.palettes.fromDuskTillDawn = {
    // all palette objects require an explicit
    // object "color" property to hold
    // color key/value (string/string) pairs!
    color: {
        dusk: 'bg-blue-700 dark:bg-blue-400',
        dawn: 'bg-cyan-600 dark:bg-blue-300'
    }
}
```

And of course, we'll still need to `provide()` our data to our app, so we can now do this using our extended defaults like so:

```javascript
app.provide('tw', tw)
```

And if our newly extended data was used in an app component, we could access these new Tailwind CSS classes strings anywhere in our code like this:

```html
<template>
    <div :class="text.dusk">
        I'll have dusk bg CSS classes!
    </div>
    <div :class="text.dawn">
        I'll have dawn bg CSS classes!
    </div>
</template>
<script setup lang="ts">
    const tw = inject('tw')
    const text = {
        dusk: tw.bg.palettes.fromDuskTillDawn.colors.dusk,
        dawn: tw.bg.palettes.fromDuskTillDawn.colors.dawn,
    }
</script>
```

<br>











## Package Modules

### The ObewdsTwConfig Object

Occasionally and especially for component library and prototyping development, you may need to import the default data this package uses to generate a `./obewds.tw.config.json` file, directly into your component logic.

This is useful for example, when you need a fallback set of complete default classes to pre-fill a component with visuallly brand-like default CSS classes - which is extrmemly helpful for rapid protyping!

Importing this package directly is easy:

```javascript
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

type ObewdsTwConfigType = typeof ObewdsTwConfig
```

::: info TYPESCRIPT IS THE RIGHT SCRIPT
Generally speaking, the `ObewdsTwConfig` object is often used in TypeScript contexts, to coax the TypeScript engine into understanding whatever it is we may be doing inside our components (to handle our component functionalities, atomic class data, etc.).
:::

Here's an example of using the `ObewdsTwConfig` object to create a utility function to extract the top-level object keys from the default data in the  `ObewdsTwConfig` object:

```javascript
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

type ObewdsTwConfigType = typeof ObewdsTwConfig

const getArrayOfObjectKeys =  function(tw: ObewdsTwConfigType): string[] {

    let objectKeys: string[] = []
    
    if (tw) {

        objectKeys = Object.keys( tw ).map( (key) => key )

    }

    return objectKeys

}

console.log(
    getArrayOfObjectKeys(ObewdsTwConfig) // returns array of keys from ObewdsTwConfig
)
```

<br>





### The ObewdsTwConfigGroups Array

Across various OBE:WDS components, the `ObewdsTwConfigGroups` array is a surprisingly crucial piece of the puzzle. This won't be needed unless a developer is authoring a new OBE:WDS component to fit within this system, but it's worth making this aspect transparent for sake of understanding how things work under the hood with the `ObewdsTwConfig` object!

Here's an example of using the `ObewdsTwConfig` object in combination with the `ObewdsTwConfigGroups` array to create a utility function to extract a specific top-level object key's data from the default data in the  `ObewdsTwConfig` object:

```javascript
import { ObewdsTwConfig, ObewdsTwConfigGroups } from '@obewds/obewds-tw-config'

type ObewdsTwConfigType = typeof ObewdsTwConfig
type DesignSystemKeys = typeof ObewdsTwConfigGroups[number] // number is required to access the tuple string type values

const getBgPaletteNames =  function(tw: ObewdsTwConfigType, key: DesignSystemKeys): string[] {

    let output: string[] = []
    
    if (tw && tw[key] && tw[key].palettes) {

        output = Object.keys(tw[key].palettes).map( (key) => key )

    }

    return output

}

console.log(
    getBgPaletteNames(ObewdsTwConfig, 'bg') // returns array of keys from ObewdsTwConfig
)
```

<br>






## Uninstall

```bash
npm uninstall @obewds/obewds-tw-config
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->
