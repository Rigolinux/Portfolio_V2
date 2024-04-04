<script lang="ts" setup>
import {useI18n} from 'vue-i18n';

const { t } = useI18n();

interface Info {
  period: string;
  header: string;
  description: string;
  Logo?: string;
  link: string;
}

interface Props {
    info: Info;
}

const props = defineProps<Props>();

const Opentab = (link: string) => {
    window.open(link, '_blank');
};

</script> 

<template>
<div class="flex justify-center items-center">
<div class="parent lg:w-full w-4/5 " > 
    <div class="flex" >
        <div class="h-6 w-6 son-background rounded-full dark:bg-white bg-gray-700 opacity-15  "
            
        >
        </div>
        <div class="ml-3 son-color dark:text-white text-gray-700 "
          
        >
            {{props.info.period}}
        </div>
    </div>
    <div class="border-l-2 ml-3  border-gray-200 dark:border-gray-700  border-circle   dark:text-white ">
        <div class="ml-8 ">
            <br/>
            <div class="text-xl">{{ t(props.info.header) }} </div>
            <div class="flex">
                <span class="w-3/4">
                    {{ t(props.info.description) }}
                </span>
                <div class="w-1/4 flex justify-end">
                    <div class="w-16 h-18 hover:cursor-pointer" @click="Opentab(props.info.link)">
                        <img  :src="props.info.Logo" alt="logo"  />
                    </div>
                </div>
            </div>
            <br/>
        </div>
    </div>
</div>
</div>

</template>


<style scoped>


</style>
