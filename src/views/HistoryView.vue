<script lang="ts" setup>
import { Experience } from '@/data/Experience';
import HistoryResume from '@/components/HistoryResume.vue';



</script> 

<template>

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
