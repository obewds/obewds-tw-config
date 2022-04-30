<!--
    ./src/app/Workspace.vue
-->


<script setup lang="ts">

    import ObewdsTwConfig from '@/data/obewds-tw-config'

    let config = JSON.stringify(ObewdsTwConfig, null, 4)

    //console.log(config)

    let testConfig = ObewdsTwConfig

    testConfig.bg.palettes.console.colors.new = "test-string"
    
    let newBorderTestPalette = {
        colors: {
            '':'',
            "new-color": 'test-classes right-here'
        }
    }

    testConfig.border.palettes.test = newBorderTestPalette

    testConfig.bg.palettes.default.colors.success = 'typescript-can be-cool'

</script>


<template>

    <div class="text-green-500 text-xs pb-1">WORKSPACE</div>
    
    <div class="bg-white text-left border-t-2 border-b-2 border-green-500 border-dashed py-24 px-6">


        <strong class="block ">Adding new color to existing default component:</strong>

        <pre><code>{{ testConfig.bg.palettes.console.colors }}</code></pre>


        <br><br>


        <strong class="block ">Adding new Palette in component:</strong>

        <pre><code>{{ testConfig.border.palettes }}</code></pre>


        <br><br>


        <strong class="block ">Modified Default Success Bg Color:</strong>
        
        <pre><code>{{ testConfig.bg.palettes.default.colors }}</code></pre>


        <br><br>


        <strong class="block ">Default ObewdsTwConfig:</strong>
        
        <pre><code>{{ config }}</code></pre>

    </div>

</template>
