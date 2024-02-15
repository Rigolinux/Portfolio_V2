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
  <main class="container p-15 md:columns-2">
    <div class="md:min-h-100">

    </div>
    <section class="ml-auto " >
      <router-view />
    </section>
  </main>
  
</template>

<style scoped>

</style>
