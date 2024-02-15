<script setup lang="ts">
import { ref } from 'vue'
const array = ref([1, 2, 3, 4, 5])
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Toda inas lista </h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="a in array" :key="a" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          
            <img src="@/assets/logo.svg"  class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Toda inas lista </h3>
          <p class="mt-1 text-lg font-medium text-gray-900">Datos</p>
        </a>
      </div>
    </div>
  </div>
</template>