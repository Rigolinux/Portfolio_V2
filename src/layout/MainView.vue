<script setup lang="ts">
import {  RouterView } from 'vue-router'
import CardHeader from '@/components/CardHeader.vue';
import SideBar from '@/components/SideBar.vue';
import ConfigDialog from '@/components/ConfigDialog.vue';
import { useI18n } from 'vue-i18n';
import { useSideBarStore } from '@/stores/sideBar';
import { SunIcon, MoonIcon, Cog8ToothIcon} from "@heroicons/vue/24/outline";
import { useConfigStore } from '@/stores/config';
import { ref } from 'vue';


const sidebar = useSideBarStore();
const config = useConfigStore();

config.setCurretOptions();

const { t,locale } = useI18n();
let storedConfigOptions = localStorage.getItem('configOptions');
const configOptions = storedConfigOptions ? JSON.parse(storedConfigOptions) : null;
locale.value = configOptions && configOptions.locale ? configOptions.locale : 'es';
config.setLocale(locale.value);
console.log(config.textColor);
document.documentElement.style.setProperty('--text-color', config.textColor );
const isHovering = ref(false);


</script>


<template>
    <div :style="config.Theme == 'Dark' ? 'background-color:black' : 'background-color:white'" >
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper ">
        {{ t('welcome') }}
        <div class="fixed top-10  right-5
          md:right-5 lg:right-20 hoverable rounded-md w-10 h-10 text-center flex justify-center items-center" 
         
          :style="` background-color: ${config.getInvertedColor()};`">
        <SunIcon v-if="config.Theme == 'Dark'"  @click.prevent="config.setTheme('Light')"  class="w-8 h-8 " :style="'color:'+ config.textColor"   />
        <MoonIcon v-if="config.Theme == 'Light'"  @click.prevent="config.setTheme('Dark')"  class="w-8 h-8"   :style="'color:'+ config.textColor"  />
        </div>
        <nav>
          <div @click.prevent="sidebar.toggle" class="btn bg-teal-400">
            Abrir
          </div>
          <div @click.prevent="config.handleConfigDialog" class="btn bg-red-700">
            <Cog8ToothIcon class="w-8 h-8 bg" :style="'hover color:'+ config.textColor" />
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
   
    </main>
   
  </div>
</template>

<style >
.hoverable:hover {
  color: var(--text-color);
}
</style>