<!--
    ./src/app/Workspace.vue
-->


<script setup lang="ts">

    import ObewdsTwConfig from '@/data/obewds-tw-config'

    let config = JSON.stringify(ObewdsTwConfig, null, 4)

    //console.log(config)

    let testConfig = ObewdsTwConfig

    if (testConfig?.bg?.palettes?.console.colors) {
        testConfig.bg.palettes.console.colors.new = "test-string"
    }
    
    let newBorderTestPalette = {
        colors: {
            '':'',
            "new-color": 'test-classes right-here'
        }
    }

    if (testConfig?.border?.palettes) {
        testConfig.border.palettes.test = newBorderTestPalette
    }
    
    if (testConfig?.bg?.palettes) {
        testConfig.bg.palettes.default.colors.success = 'typescript-can be-cool'
    }
    
    if (testConfig?.text?.palettes) {
        testConfig.text.palettes.default.colors = {
            "default": 'text-black dark:text-white',
            primary: 'text-amber-500 dark:text-amber-200',
            secondary: 'text-indigo-500 dark:text-indigo-200',
            error: 'text-rose-500 dark:text-rose-200',
            success: 'text-emerald-500 dark:text-emerald-200'
        }
    }

</script>


<template>

    <div class="text-green-500 text-xs pb-1">WORKSPACE</div>
    
    <div class="bg-white text-left border-t-2 border-b-2 border-green-500 border-dashed py-24 px-6">


        <strong class="block ">Adding new color to existing default component:</strong>

        <pre><code>{{ testConfig?.bg?.palettes?.console?.colors }}</code></pre>


        <br><br>


        <strong class="block ">Adding new Palette in component:</strong>

        <pre><code>{{ testConfig.border.palettes }}</code></pre>


        <br><br>


        <strong class="block ">Modified Default Success Bg Color:</strong>
        
        <pre><code>{{ testConfig.bg.palettes.default.colors }}</code></pre>


        <br><br>


        <strong class="block ">Replacing all Default Text Color Values:</strong>
        
        <pre><code>{{ testConfig.text.palettes.default.colors }}</code></pre>


        <br><br>


        <strong class="block ">Default ObewdsTwConfig:</strong>
        
        <pre><code>{{ config }}</code></pre>

    </div>

</template>
