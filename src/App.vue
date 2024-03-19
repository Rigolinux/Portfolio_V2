<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import ConfigDialog from './components/ConfigDialog.vue';
import { useI18n } from 'vue-i18n';

import MainView from '@/layout/MainView.vue';
import { useConfigStore } from '@/stores/config';
import { onMounted } from 'vue';



const config = useConfigStore();

config.setCurretOptions();

const { locale } = useI18n();
let storedConfigOptions = localStorage.getItem('configOptions') || null;
onMounted(() => {
  console.log('mounted');
  if (storedConfigOptions) {
    const configOptions = JSON.parse(storedConfigOptions);
    if (configOptions) {
      locale.value = configOptions.locale ? configOptions.locale : 'es';
      config.setLocale(locale.value);
    }
    else {
      locale.value = 'es';
      config.setLocale(locale.value);
    }
  }
  else {
    locale.value = 'es';
    config.setLocale(locale.value);
  }
});




</script>

<template>
  <div
    :class="config.Theme == 'Dark' ? 'dark' : ''"
  >

    
    <MainView  />
    <SideBar  />
    
    <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out"
    @click.self.prevent="config.handleConfigDialog"
    v-show="config.configDialog"
    style="background-color: rgba(255, 255, 255, 0.75)"
    >
      <ConfigDialog  />
    </div>
  </div>

</template>

<style scoped>
/* Puedes agregar esto en tu archivo CSS global o en una etiqueta <style> de componente */



</style>