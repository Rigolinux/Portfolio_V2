<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useConfigStore } from '@/stores/config';
import { ref } from 'vue';
import { useI18n } from "vue-i18n";
const config = useConfigStore();

const { t, locale } = useI18n();

const Lenguajes = ref([
    { id: 1, name: t('Spanish'), value: 'es' },
    { id: 2, name: t('English'), value: 'en' }, 
]);


const Colors = ref([
    { id: 1, name: 'CusGreen', value: '#28e98c' , selected: true},
    { id: 2, name: 'CusYellow', value: '#e4af12', selected: false}, 
    { id: 3, name: 'CusOrange', value: '#fe6f1d', selected: false}, 
    { id: 4, name: 'Cuslight_blue', value: '#14c5fd', selected: false},      
    { id: 5, name: 'CusPurple', value: '#a14cfb', selected: false},
    { id: 6, name: 'CusRed', value: '#f31313' , selected: false},
    { id: 7, name: 'CusPink', value: '#ff99cc', selected: false},
    { id: 8, name: 'CusGrey', value: '#c0c0c0', selected: false}, 
    {id: 9, name: 'CusBlue', value: '#1338f3', selected: false},
 
]);

interface Color {
    id: number;
    name: string;
    value: string;
    selected: boolean;
}

const setupSelectedColor = (color : Color) => {
    config.textColor = color.value;
    Colors.value.forEach((colorData) => {
        if (colorData.id === color.id) {
            colorData.selected = true;
        } else {
            colorData.selected = false;
        }
        return colorData;
    });
};

const findCol = (color: string) => {
     const founded = Colors.value.find((col) => col.value === color);

     if(founded){
         setupSelectedColor(founded);
     }

};

findCol(config.textColor);


const setConfigValues = () => {
    locale.value = config.Locale;
    config.saveOptions();
    config.handleConfigDialog();
};

</script>

<template>
    <transition name="dialog-fade" mode="out-in">
        <div v-show="config.configDialog" class="max-w-sm p-6 shadow border border-gray-200 rounded-lg" :style="config.Theme == 'Dark' ? 'background-color:black' : 'background-color:white'" >
            <div class="flex flex-col items-end mr-2">
            <button class="btn" @click.prevent="config.handleConfigDialog" >
                <XMarkIcon class="w-6 h-6" :style="config.getCurrentColorTxt()"  />
            </button>
            </div>
            
            <h5 class="mb-2 text-2xl font-bold tracking-tight "
            :style="'color:'+ config.textColor"
            >{{ t('Config_Page') }}</h5>

            <div>
                <label for="lenguaje" class="block text-sm font-medium  text-gray-700 dark:text-gray-400"
                :style="config.getCurrentColorTxt()"
                >{{ t('Language') }}</label>
                <select v-model="config.Locale" id="lenguaje" name="lenguaje" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                :style="`${config.getCurrentColorTxt()} ;${config.getCurrentColorBg()}`"
                >
                    <option v-for="lenguaje in Lenguajes" :key="lenguaje.id" :value="lenguaje.value">{{ lenguaje.name }}</option>
                </select>
            </div>

            <div class="mt-4">
                <label for="color" class="block text-sm font-medium  text-gray-700 dark:text-gray-400"
                :style="config.getCurrentColorTxt()"
                >{{ t('Text_Color') }}</label>
                <div class="flex flex-wrap justify-between items-center mt-2 ">
                    <div v-for="color in Colors" @click="setupSelectedColor(color)" 
                    :key="color.id" class="w-8 h-8  rounded-full cursor-pointer flex  m-1 justify-center items-center" :style="{ backgroundColor: color.value, border: color.selected ? 
                    ` 2px solid ${config.getInvertedColor()}` : 'none', }"
                    >
                    <div v-if="color.selected" class="  w-1 h-1   rounded-full"
                        :style="` background-color: ${config.getInvertedColor()}`"
                    >

                    </div>
                  </div>
                </div>
            </div>
            <a @click.prevent="setConfigValues" class="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {{t('Save')}}
                
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