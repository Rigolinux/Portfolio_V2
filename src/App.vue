<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CardHeader from './components/CardHeader.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper ">
      Hola  a todos

      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <div class="md:fixed top-40 left-5 overflow-auto flex items-center justify-center">
    <CardHeader />
  </div>
  <main class="md:container md:p-15 ">
    
    <section class="md:w-1/2 md:ml-auto  sm:w-full">
      <router-view />
    </section>
  </main>
  
</template>

<style scoped>

</style>
