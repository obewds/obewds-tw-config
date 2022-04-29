---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


::: danger
This is an example GitHub Pages site and is NOT intended for actual use in real projects/products!
:::


# @obewds/obewds-tw-config

Welcome to the docs page for OBE:WDS's `ObewdsTwConfig.vue` component for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/obewds-tw-config --save-dev
```




## Import Component




### Template syntax

```html{2}
<template>
    <ObewdsTwConfig/>
</template>
```




### Script setup syntax

```html{2}
<script setup lang="ts">
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
</script>
```




### Composition API syntax

```html{3,6}
<script lang="ts">
    import { defineComponent } from 'vue'
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

    export default defineComponent({
        components: { ObewdsTwConfig }
    })
</script>
```




## Props




### text

:white_check_mark: - Type `String`  
:x: - Not Required  
:x: - Doesn't Validate


```html{2}
<template>
    <ObewdsTwConfig text="My text prop string"/>
</template>
```

Outputs:

```html
<div>My text prop string</div>
```

::: warning
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




## Slots




### default

```html{2-4}
<template>
    <ObewdsTwConfig>
        My slot content
    </ObewdsTwConfig>
</template>
```

Outputs:

```html
<div>My slot content</div>
```

::: danger
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




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
