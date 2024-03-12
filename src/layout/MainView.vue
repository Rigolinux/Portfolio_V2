<script setup lang="ts">
import HomeView from '@/views/HomeView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import CardHeader from '@/components/CardHeader.vue';
import HistoryView from '@/views/HistoryView.vue';

import { useI18n } from 'vue-i18n';
import { useSideBarStore } from '@/stores/sideBar';
import { SunIcon, MoonIcon, Cog8ToothIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { useConfigStore } from '@/stores/config';




const sidebar = useSideBarStore();
const config = useConfigStore();

config.setCurretOptions();

const { t,locale } = useI18n();
let storedConfigOptions = localStorage.getItem('configOptions');
const configOptions = storedConfigOptions ? JSON.parse(storedConfigOptions) : null;
locale.value = configOptions && configOptions.locale ? configOptions.locale : 'es';
config.setLocale(locale.value);

document.documentElement.style.setProperty('--text-color', config.textColor );






</script>


<template>
    <div :class="config.Theme == 'Dark' ? 'bg-gray-900' : 'bg-white'" >
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <div class="md:fixed md:top-40 p-10 md:left-5 overflow-auto flex items-center justify-center">
          <CardHeader />
        </div>
        <main class="md:container md:p-15 ">
        
        <section class="md:w-1/2 md:ml-auto  sm:w-full">         
           <ExperienceView />
           <HomeView />
           <HistoryView  v-motion-slide-visible-right :delay="600" />
        </section>
    
        </main>
        <header>
     
      <div class="wrapper ">
        {{ t('welcome') }}
        <div class="fixed top-10  right-5
          md:right-5 lg:right-20  rounded-md w-10 h-10 text-center flex justify-center items-center
          " 
         
          :style="` background-color: ${config.getInvertedColor()};`">
        <SunIcon v-if="config.Theme == 'Dark'"  @click.prevent="config.setTheme('Light');"  class="w-8 h-8 text-black hoverable"    />
        <MoonIcon v-if="config.Theme == 'Light'"  @click.prevent="config.setTheme('Dark'); "  class="w-8 h-8 text-white hoverable"     />
        </div>
        <div class="fixed top-10 left-5 flex 
          md:left-15 lg:left-20">
            <div @click.prevent="sidebar.toggle" class="dark:text-white w-10 h-10 text-center flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Bars3Icon class="w-8 h-8 hoverable" />
            </div>
     
            <div @click.prevent="config.handleConfigDialog" class=" dark:text-white ml-3 w-10 h-10 text-center flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Cog8ToothIcon class="w-8 h-8 hoverable" />
            </div>
        </div>
      
      </div>
    </header>
  </div>
</template>

<style >



</style>