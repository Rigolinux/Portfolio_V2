<script setup lang="ts">
import IconsMdi from '@/components/IconsMdi.vue';    
import { MenuOptions } from '@/data/MenuOptions';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>


<template>
    <div class="border border-gray-500 p-4 rounded-full">
        <div v-for="(item, index) in MenuOptions" :key="index"  class="my-5">
            <a class="h-18 w-12 dark:text-white  text-gray-500 hoverable hover:cursor-pointer "  
            :title="t(item.name)"
            :href="'#'+item.link" >
            <IconsMdi :path="item.Icon"  />
            </a>
    </div>
    </div>
</template>