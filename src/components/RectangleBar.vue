
<script setup lang="ts"> 
import IconsMdi from '@/components/IconsMdi.vue';    
import { ref,watch } from 'vue';
import { useElementVisibility } from '@vueuse/core'
import { useConfigStore } from '@/stores/config';

interface Lenguajes {
  name: string;
  domain: number;
  color: string;
  icon: string;
}

const prop = defineProps<Lenguajes>();

const config = useConfigStore();
const dinamicWidth = ref(0);
const element = ref(null);
const visibility = useElementVisibility(element);
console.log(prop.color);
watch(visibility, (value) => {
  if (value) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < prop.domain) {
        dinamicWidth.value = i;
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000 / prop.domain);
  }
});

//dinamicWidth aumont from 0 to 45 1  by 1  until reach 45  then stop in 1 second
//load when the component is visible




</script>
<template>

<div v-motion-slide-visible-bottom ref="element">
  <div class="flex justify-between mb-1 mt-3" >
    <span class="text-base  font-medium  flex justify-between" :class="config.Theme == 'Dark' ? 'text-white' : prop.color">
       <IconsMdi :path="prop.icon"/>
        <span class="ml-2 mt-2 dark:text-white text-black">{{ prop.name }}</span>
      </span>
    <span class="text-sm font-medium dark:text-white">{{prop.domain}}%</span>
  </div>
  <div class="w-full  bg-gray-200 rounded-full h-5 dark:bg-gray-700">
    <div class="custom-bg  h-5 rounded-full" :style="`width: ${dinamicWidth}%`"></div>
  </div>
</div>


 
</template>

<style>

</style>