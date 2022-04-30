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
The first goal is to reduce the average string length (cognative load) of using atomic CSS classes at scale in production web applications.

The approach is simple: extract common patterns **in groups** of atomic CSS classes for brand-level (and particularly color and accessibility related) characteristics, and provide them **globally** to ensure maximum DRYness and maximum iterative control over those classes for:

* Rapid prototyping
* Incremental design refinements
* Accessibility maintenance/refinements
:::

::: info GOAL TWO
The second goal is to make this solution in a way that allows front end developers:

* Fully type defined and type hinted components
* A base structure that is ready to handle dynamic state changes as they pertain to end-user visual aesthetics
* A base structure to use to keep brand-centric and aesthetically flexible details seperate from more functional and programmatic component structures
* Flexible and easy to integrate components
* Exhaustive documentation
* Complete modularity
* Tree shakable
* ES Module and Node.js friendly
* Fully tested with 100% coverage components
* Ideally using next-gen tooling that's as fast as possible (thank you Vite.js!)
:::

However to accomplish those goals realistically, the design/marketing/branding side of things needs a straight forward (and human readable) way to "see" exactly how brand-level characteristics across an application "feel". They also need to be able to consistently tweak those characteristics to refine designs into both beautiful and accessable solutions... without being all up in the front enders business all the time!

That's where this package kicks in! It's a foundational piece of simple code meant to provide both sides of the design and development coin the space and interoperability needed to be their best and deliver consistently strong work together!

What's cool is ultimately this is all achievable through identifying patterns and a judicious obsession for a DRY front end code base, along with a healthy obsession for a design system that works out-of-the-box for rapid prototyping as well as being fully deconstructable/extendable for the needs and standards of modern production web apps.




## Installation

```bash
npm install @obewds/obewds-tw-config --save-dev
```




## Importing

```javascript
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
```






## Tailwind Config Integration

To use the defaults out of the box with a Tailwind CSS project, you'll need to import the defaults and add them to Tailwinds config file's exported `content` array like so:

```javascript
const ObewdsTwConfig = require('@obewds/obewds-tw-config')

module.exports = {
    // ...
    content: [
        // ...
        ObewdsTwConfig,
    ],
    // ...
}
```




## A Vue.js Use Example

Let's take a look at modifying this config file in a Vue.js app context for sake of brevity.

To start out, let's consider a typical Vue app initialization file containing something along the lines of:

```javascript
import { createApp } from 'vue' // the vue framework
import App from './App.vue' // a primary view/page component
import './index.css' // a Tailwind CSS base file (with @tailwind base etc.)

const app = createApp(App) // creating the app instance

app.mount('#app') // mounting the app to the DOM
```

With that code in mind, we can add in our `ObewdsTwConfig` module into the mix by first importing the base config data from the package.

```javascript
import ObewdsTwConfig from '@obewds/obewds-tw-config'
```

Next up and in the contexts of a Vue.js app, we could elect to make the base config data from this package available globally for use in any app component, by providing a line of code to `provide()` our data to components:

```javascript
app.provide('tw', obewdsTwConfig)
```

Putting everything together, our Vue app's initialization files now looks something like this:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import ObewdsTwConfig from '@obewds/obewds-tw-config' // WooHoo!

const app = createApp(App)

app.provide('tw', obewdsTwConfig) // Provide 'tw' keyed data

app.mount('#app')
```

And this of course means we can use our provided data in a Vue component, like this:

```html
<template>
    <div class="tw.bg.palettes.default.color.primary">
        <slot/>
    </div>
</template>
<script setup lang="ts">
    const tw = inject('tw')
</script>
```

::: danger ABOUT THE 'tw' KEY
Currently all OBE:WDS + Tailwind CSS focused components and design systems will use and expect the specific **provided** key of `'tw'` within components and design system component sets.

So if you're using Tailwind CSS and OBE:WDS together, you will **always** want to use the `'tw'` key on **both** the Vue `provide()` and `inject()` sides of things!
:::




## Customization Examples

In most cases, an end application will heavily modify or even fully replace (and extend) this design system config file. In fact, that's exactly what this package is designed to facilitate!




### Adding A New Palette Color

In most cases, an app will customize most if not all of the base/config starting data from this package. So let's look at how that would work IRL.

::: info TYPESCRIPT IS THE RIGHT SCRIPT
It's worth noting that this package has first class support for TypeScript being that it's written in... TypeScript, so your IDE can be extremely helpful when customizing your OBE:WDS + Tailwind CSS design system config data!
:::

For example, let's consider our tiny Vue.js app example above, let's start out by again importing the default data from this package:

```javascript
import ObewdsTwConfig from '@obewds/obewds-tw-config'
```

But this time, instead of providing the defaults directly to the app, let's extend the defaults a bit!

To get started with extending the default data, we'll want to assign the default data to a variable like so:

```javascript
let myTwConfig = ObewdsTwConfig
```

Now we can use our `myTwConfig` variable to get started with extending the defaults. Let's add a new background color name with a value containing some new Tailwind CSS background focused classes:

```javascript
myTwConfig.bg.palettes.default.colors.midnight = 'bg-indigo-600 dark:bg-indigo-300'
```

And of course, we'll still need to `provide()` our data to our app, so we can now do this using our extended defaults like so:

```javascript
app.provide('tw', myTwConfig)
```

And now we can use our new `midnight` color classes (DRYly :partying_face:) anywhere in our imaginary Vue.js example app!

::: tip DESIGN SYSTEM INTENT
In the `midnight` color classes example above, notice the use of Tailwind CSS `dark:` prefixed classes. If you don't know already, that's the "class" method of using dark mode in Tailwind CSS.

So it's worth mentioning now, that much of the inspiration for this workflow and approach comes from the PITA nature of not just dealing with long strings of atomic classes, but also adding to those long strings by adding 30-50% more of them for something like dark mode!

So the approach of this solution to that problem is ultimately meant to make things easier to manage and iterate through the evolution of an app from initial prototyping workflows to final production workflows!
:::




### Adding A New Palette

Adding a new Palette (of colors, so adding a new palette and colors to be exact), is similar to extending a default palette, but with a little more complexity.

So let's add a new palette to our **bg** defaults! To start, we'll want to define our palette as an object, so it's easy to add to our default config data.

```javascript
const myPaletteObj = {
    // all palette objects require an explicit
    // object "color" property to hold
    // color key/value pairs!
    color: {
        dusk: 'bg-blue-700 dark:bg-blue-400',
        dawn: 'bg-cyan-600 dark:bg-blue-300'
    }
}
```

Now that we have our new `myPaletteObj` with our new `dusk` and `dawn` color classes values, we can add our new palette to our default config object (which we're going to call `duskAndDawn`) like so:

```javascript
myTwConfig.bg.palettes.duskAndDawn = myPaletteObj
```

And of course, we'll still need to `provide()` our data to our app, so we can now do this using our extended defaults like so:

```javascript
app.provide('tw', myTwConfig)
```

And if our newly extended data was used in an app component, we could access these new Tailwind CSS classes strings anywhere in our code like this:

```html
<template>
    <div :class="tw.bg.palettes.duskAndDawn.colors.dusk">
        <slot name="dusk"/>
    </div>
    <div :class="tw.bg.palettes.duskAndDawn.colors.dawn">
        <slot name="dawn"/>
    </div>
</template>
```




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
