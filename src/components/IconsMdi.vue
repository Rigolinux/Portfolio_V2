<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'


const props = defineProps({
    type: {
        type: String,
        required: false,
        default: 'mdi',
    },
    path: {
        type: String,
        required: true,
    },
});
console.log(props.type)
</script>

<template>
     <svg-icon :size="34" :type="props.type" :path="props.path"></svg-icon>
</template>