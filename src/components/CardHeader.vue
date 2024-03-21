<script setup lang="ts">
import { useI18n } from "vue-i18n";
import IconsMdi from "./IconsMdi.vue";
const { t } = useI18n();
import { mdiGithub,  mdiLinkedin  } from '@mdi/js';

const openInNewTab = (url: string) => {
    window.open(url, '_blank');
}
</script>

<template>
  

<div class="shadow-2xl max-w-sm p-6 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
    <a href="#" class="w-full flex justify-between items-center text-center">
        <h1 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 text-left dark:text-white">Rigoberto</h1>
        <h5 class="mb-2  font-bold tracking-tight text-base text-gray-900 text-right dark:text-white">{{ t('SoftEng') }}</h5>
    </a>
    <div class="w-full flex justify-center items-center ">
        <img src="https://dhujijuorqbcfrqbdjqo.supabase.co/storage/v1/object/public/PortfolioBucket/portfolioImages/1685065428105.jpg?t=2024-03-07T16%3A53%3A46.713Z"
         alt="profile" class="w-3/4 h-full object-cover rounded-full" />
    </div>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
    <div class="flex justify-evenly items-center mt-4 dark:text-white text-gray-700 ">
           
        <div class="w-12 rounded-full hoverable-borders h-12 flex justify-center items-center border   hoverable hover:cursor-pointer "
            @click.prevent="openInNewTab('https://github.com/Rigolinux')"
        >
                <IconsMdi type="mdi" :path="mdiGithub" />
        </div>
        <div class="w-12 rounded-full hoverable-borders h-12 flex justify-center items-center border   hoverable hover:cursor-pointer "
            @click.prevent="openInNewTab('https://www.linkedin.com/in/bryan-portillo-589a2b21a/')"
        >
                <IconsMdi type="mdi" :path="mdiLinkedin" />
        </div>
        
    </div>
    
</div>


</template>