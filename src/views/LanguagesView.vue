<script setup lang="ts">
import {Languajes } from '@/data/Languajes';
import RectangleBar from '@/components/RectangleBar.vue';

</script>

<template>
    
    <div class="" v-for="(item, index) in Languajes"  :key="index">
        <RectangleBar :name="item.name" :domain="item.domain" :color="item.color" :icon="item.icon"/>
    </div>
</template>


<style scoped>
</style>
