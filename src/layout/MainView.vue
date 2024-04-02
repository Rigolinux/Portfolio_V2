<script setup lang="ts">
import HomeView from '@/views/HomeView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import CardHeader from '@/components/CardHeader.vue';
import HistoryView from '@/views/HistoryView.vue';
import ExpecializationView from '@/views/ExpecializationView.vue';
import LanguagesView from '@/views/LanguagesView.vue';
import ContactView from '@/views/ContactView.vue';
import MenuView from '@/views/MenuView.vue';
import { useI18n } from 'vue-i18n';
import { useSideBarStore } from '@/stores/sideBar';
import { SunIcon, MoonIcon, Cog8ToothIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { useConfigStore } from '@/stores/config';




const sidebar = useSideBarStore();
const config = useConfigStore();

config.setCurretOptions();

const { t } = useI18n();



document.documentElement.style.setProperty('--text-color', config.textColor );
document.documentElement.style.setProperty('--bg-color', config.Theme == 'Dark' ? 'rgb(17 24 39)' : '#ffff');





</script>


<template>
    <div class="pb-20" :class="config.Theme == 'Dark' ? 'bg-gray-900' : 'bg-white'" >
     
      <div class="md:fixed md:top-32 p-10 md:left-20 overflow-auto flex items-center justify-center mt-6">
        <CardHeader />
      </div>
      <main class="md:container md:p-15 ">     
        <section class="md:w-1/2 md:ml-auto  sm:w-full pt-10" id="experience">         
            <ExperienceView />
            <div class="mt-2" id="home" >
              <HomeView />
            </div>
            <div class="mt-2" id="history" >
              <HistoryView  />
            </div>
            <div class="mt-2" id="especialization" >
              <ExpecializationView />
            </div>
          <div class="mt-2  " id="languajes" >
              <LanguagesView />

          </div>
          <div class="mt-2"  id="contact" >
            <ContactView />
          </div>
        </section>
  
      </main>
      <div class="md:fixed md:top-1/4 p-10 md:right-20 overflow-auto md:flex items-center justify-center mt-6 hidden">
        <MenuView />
      </div>
      <header>
        <div class="wrapper ">
        
          <div class="fixed top-10 left-5 flex justify-between
          md:left-15 lg:left-20">
          <div class="flex">
            <div :title="t('menu')" @click.prevent="sidebar.toggle" class="dark:text-white w-10 h-10 text-center flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Bars3Icon class="w-8 h-8 hoverable" />
            </div>
            
            <div  @click.prevent="config.handleConfigDialog" class=" dark:text-white ml-3 w-10 h-10 text-center flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Cog8ToothIcon class="w-8 h-8 hoverable" />
            </div>
          </div>
          <div class=" rounded-md w-10 h-10 text-center flex justify-center items-center ml-3
            " 
          
            :style="` background-color: ${config.getInvertedColor()};`">
          <SunIcon v-if="config.Theme == 'Dark'"  @click.prevent="config.setTheme('Light');"  class="w-8 h-8 text-black hoverable"    />
          <MoonIcon v-if="config.Theme == 'Light'"  @click.prevent="config.setTheme('Dark'); "  class="w-8 h-8 text-white hoverable"     />
          </div>
          </div>
        
        </div>
      </header>
  </div>
</template>

<style >



</style>