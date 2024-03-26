<script setup lang="ts">
import { useI18n } from "vue-i18n";
import IconsMdi from "./IconsMdi.vue";
const { t } = useI18n();
import { mdiGithub,  mdiLinkedin, mdiFileDocumentOutline  } from '@mdi/js';

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
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-3">{{ t('About_Me') }}</p>
    <div class="flex justify-center">
        <a href="#" class=" w-3/4 flex justify-center items-center px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ t('Contact') }}
        
        </a>
    </div>
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
        <div class="w-12 rounded-full hoverable-borders h-12 flex justify-center items-center border  hoverable hover:cursor-pointer " :title="t('D_CV')"
            @click.prevent="openInNewTab('https://dhujijuorqbcfrqbdjqo.supabase.co/storage/v1/object/public/PortfolioBucket/CVS/Bryan_Portillo%20CV%20.pdf?t=2024-03-26T18%3A53%3A42.831Z')"
        >
                <IconsMdi type="mdi" :path="mdiFileDocumentOutline" />
        </div>
        
    </div>
    
</div>


</template>