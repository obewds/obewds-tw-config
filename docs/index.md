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






## Config File Installation

First off, go ahead and install the package with:

```bash
npm install @obewds/obewds-tw-config --save-dev
```

Next up, you can run an install script to bring the module output data from this package into your project to edit and customize completely as a handy defaults config JSON file using `npm explore`:

```bash
npm explore @obewds/obewds-tw-config -- npm run install:config
```

You should now have a file in your root directory (`./obewds.tw.config.json`) that you can use, reference, include in Tailwind CSS config arrays, and more!






## Including Config in Tailwind

To actually use your new `./obewds.tw.config.json` file, Tailwind CSS needs to be made aware of the file and it's CSS classes, so they end up included in JIT/build output files. Adding your new defaults config file is a one-liner in Tailwind's `content` inclusion array:

```javascript
// ./tailwind.config.js

module.exports = {
    // ...
    content: [
        // ...
        "./obewds.tw.config.json",
    ],
    // ...
}
```




## Importing into Apps

In modern ES Module contexts, the new `./obewds.tw.config.json` defaults file will be automatically converted into a usable JavaScript object when imported. So to use the new file programatically, we simply need:

```javascript
// assuming we're including into a file that's also in the root directory
import tw from './obewds.tw.config.json'
```

Conversely, the same can be accomplished for Node.js contexts, by switching to the require() syntax:

```javascript
// assuming we're including into a file that's also in the root directory
let tw = require('./obewds.tw.config.json')
```


::: tip IMPORT BEST PRACTICES
* Call your import whatever you want
* But 'tw' is the internal/common convention!
* And 'tw' is used/advised for components like Vue.js's `provide()`/`inject()`, too!
:::







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

With that code in mind, we can add in our `ObewdsTwConfig` defaults into the mix by first importing them:

```javascript
import tw from '../obewds.tw.config.json'
```

Next up and in the contexts of a Vue.js app, we could elect to make the base config data from this package available globally for use in any app component, by providing a line of code to `provide()` our data to components:

```javascript
app.provide('tw', tw)
```

Putting everything together, our Vue app's initialization files now looks something like this:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

import tw from '../obewds.tw.config.json' // WooHoo!

const app = createApp(App)

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




## Programmatic Customization

In some cases, an end application will heavily modify or even fully replace (and extend) this design system config file. This is ultimately trivial, because we're really just dealing with objects of keys/values. However the structure is defined for use with components with built-in design system centric features, so thankfully TypeScript is available to help guide programmatic customization.

::: info TYPESCRIPT IS THE RIGHT SCRIPT
It's worth noting that this package has first class support for TypeScript being that it's written in... TypeScript, so your IDE can be extremely helpful when customizing your OBE:WDS + Tailwind CSS design system config data!
:::

Let's look at some simple examples just to illustrate the flexibility and intent of use.




### Changing Default Colors

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



### Adding A Default Palette Color

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




### Adding A New Palette

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
