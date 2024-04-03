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
    title: {
        type: String,
        required: false,
        default: null,
    },
    center: {
        type: Boolean,
        required: false,
        default: false,
    },
    
});

</script>

<template>
    <div class="flex flex-col" :class="center ? ' items-center justify-center': ''">
        <svg-icon :size="34" :type="props.type" :path="props.path"></svg-icon>
        <h2 v-if="props.title" class="text-center text-sm font-semibold text-gray-700 dark:text-gray-400">{{ props.title }}</h2>
    </div>
</template>