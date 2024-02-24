<script setup lang="ts">
import { XMarkIcon} from "@heroicons/vue/24/outline";
import { useConfigStore } from '@/stores/config';

const config = useConfigStore();

</script>

<template>
    <transition name="dialog-fade" mode="out-in">
        <div v-show="config.configDialog" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-end mr-2">
            <button class="btn" @click.prevent="config.handleConfigDialog" >
                <XMarkIcon class="w-6 h-6 text-black" />
            </button>
            </div>
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </transition>
</template>


<style >

/* Transición de entrada */
.dialog-fade-enter-active {
  transition: transform 0.3s ease-out;
}
.dialog-fade-enter-from {
  transform: scale(0);
}

/* Transición de salida */
.dialog-fade-leave-active {
  transition: transform 0.3s ease-out;
}
.dialog-fade-leave-to {
  transform: scale(0);
}

/* Estado final de la transición de entrada y estado inicial de la transición de salida */
.dialog-fade-enter-to,
.dialog-fade-leave-from {
  transform: scale(1);
}

</style>