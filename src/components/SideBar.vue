<script setup lang="ts">
import {useSideBarStore} from '@/stores/sideBar';
import { XMarkIcon} from "@heroicons/vue/24/outline";
import { useI18n } from "vue-i18n";
import { MenuOptions } from '@/data/MenuOptions';
import IconsMdi from '@/components/IconsMdi.vue';
const sidebar = useSideBarStore();

const { t } = useI18n();


</script>

<template>
<div   :style="'position: fixed; z-index: 9999;'">
    <div class="fixed left-0 top-0 w-1/5 md:w-3/6 h-full bg-white
     transition-opacity duration-200 ease-in-out z-10" @click.prevent="sidebar.toggle" v-show="sidebar.IsActive"
     :class="{'opacity-75': sidebar.IsActive, 'opacity-0': !sidebar.IsActive}">
        <div class="w-full h-full bg-white opacity-85 z-10"></div>
    </div>
    <div class="fixed right-0 top-0  w-4/5 md:w-3/6  h-full overflow-hidden  dark:text-white bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 rounded-lg transition-all" :class="{'translate-x-0': sidebar.IsActive, 'translate-x-full': !sidebar.IsActive}">
        <div class=" flex h-full w-full  flex-shrink-0">
            <div class="flex flex-col w-full h-full bg-neutral-800">
                <div class="flex flex-col h-full flex-grow pt-5 overflow-y-auto border-r bg-neutral-800">
                    <div class="flex flex-col items-end mr-2">
                        <button class="btn" @click.prevent="sidebar.toggle" >
                            <XMarkIcon class="w-6 h-6 text-white" />
                        </button>
                    </div>
                    <div class="flex flex-col items-center flex-shrink-0 px-4">
                        <a class="px-8 text-left focus:outline-none" >
                            <h2 class="block p-2 text-xl font-medium tracking-tighter transition duration-500 ease-in-out transform cursor-pointer text-neutral-200 hover:text-neutral-200">
                                {{ t('Navigation') }}
                            </h2>
                        </a>
                        
                    </div>
                    <div class="flex flex-col flex-grow px-4 mt-5">
                        <a :href="'#'+ item.link"  @click="sidebar.toggle"
                        class="mx-3 pa-6 flex w-full dark:border-white border-gray-800 border mt-3 rounded-md hover:cursor-pointer" v-for="(item, index) in MenuOptions" :key="index" >
                            <a class=" my-2 flex">
                                <div class="flex justify-center items-center ml-1">
                                    <IconsMdi :path="item.Icon" class="w-10 h-10 " :center="true" />
                                </div>
                                <span class="flex justify-center items-center ml-2 text-xl">
                                    {{ t(item.name)}}
                                </span>
                            </a>

                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    
    </div>
</div>

</template>