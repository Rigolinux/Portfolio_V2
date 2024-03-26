<script lang="ts" setup>
import { Experience } from '@/data/Experience';
import HistoryResume from '@/components/HistoryResume.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();


</script> 

<template>
    <div class="dark:text-white mt-5 mb-5">
      <h2 class="text-5xl">{{ t('HistoryExp') }}</h2>
    </div>
    <div v-for="(item,index) in Experience" :key="index"  >
        <HistoryResume :info="item" 
            v-if="(index+1) % 2 === 0" 
            v-motion-slide-visible-right 
            :delay="600" 
        />
        <HistoryResume :info="item" 
            v-else 
            v-motion-slide-visible-left 
            :delay="600" 
        />
    </div>


</template>


<style scoped>


</style>
