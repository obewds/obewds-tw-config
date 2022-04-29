<script setup lang="ts">

    type ObewdsTwConfigProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<ObewdsTwConfigProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>ObewdsTwConfig</slot>
        </template>
    </div>

</template>
