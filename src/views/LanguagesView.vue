<script setup lang="ts">
import {Languajes } from '@/data/Languajes';
import RectangleBar from '@/components/RectangleBar.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
    <div class="text-4xl font-bold dark:text-white text-black mt-5 mb-3">
        {{ t('languajes') }}
    </div>
    
    <div class="" v-for="(item, index) in Languajes"  :key="index">
        <RectangleBar :name="item.name" :domain="item.domain" :color="item.color" :icon="item.icon"/>
    </div>
</template>


<style scoped>
</style>
