<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CardHeader from './components/CardHeader.vue';
import SideBar from './components/SideBar.vue';
import { useI18n } from 'vue-i18n';
import {useSideBarStore} from '@/stores/sideBar';

const sidebar = useSideBarStore();

const { t, locale } = useI18n();
locale.value = 'es';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper ">
      {{ t('welcome') }}

      <nav>
        <div @click.prevent="sidebar.toggle" class="btn bg-teal-400">
          Abrir
        </div>
      </nav>
    </div>
  </header>
  <div class="md:fixed top-40 left-5 overflow-auto flex items-center justify-center">
  </div>
  <CardHeader />
  <main class="md:container md:p-15 ">
    
    <section class="md:w-1/2 md:ml-auto  sm:w-full">
      <router-view />
    </section>
    <SideBar  />
  </main>
  
</template>

<style scoped>

</style>