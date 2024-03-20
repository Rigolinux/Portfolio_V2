<script setup lang="ts">
import { ref } from 'vue'
import {Tecnologies } from '@/data/Tecnologies'
const array = ref(Tecnologies)
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

</script>

<template>
  <div >
    <div class="mx-auto max-w-2xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8 dark:text-white text-black" >
      <h2 class="text-5xl">{{ t('techDes') }}</h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-5">
        <a v-for="(item,index) in array" :key="index" class="group hover:cursor-pointer">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-8 ">
          
            <img :src="item.image"  class="bject-cover object-center group-hover:opacity-75" height="300" width="300" />
          </div>
          <h3 class="mt-4 text-xl "> {{ item.name }} </h3>
        
        </a>
      </div>
    </div>
  </div>
</template>