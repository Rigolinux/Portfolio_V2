
<script setup lang="ts"> 
import IconsMdi from '@/components/IconsMdi.vue';    
import { mdiLanguageTypescript } from '@mdi/js';
import { ref,watch } from 'vue';
import { useElementVisibility } from '@vueuse/core'





const dinamicWidth = ref(0);
const Bar = ref(null);
const element = useElementVisibility(Bar);

watch(element, (value) => {
  if (value) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < 45) {
        dinamicWidth.value = i;
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000 / 45);
  }
});

//dinamicWidth aumont from 0 to 45 1  by 1  until reach 45  then stop in 1 second
//load when the component is visible




</script>
<template>

<div v-motion-slide-visible-bottom ref="Bar">
  <div class="flex justify-between mb-1" >
    <span class="text-base font-medium text-blue-700 dark:text-white flex justify-between">
       <IconsMdi :path="mdiLanguageTypescript"/>
        <span class="ml-2 mt-2">TypeScript</span>
      </span>
    <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
    <div class="custom-bg  h-5 rounded-full" :style="`width: ${dinamicWidth}%`"></div>
  </div>
</div>


 
</template>

<style>

</style>