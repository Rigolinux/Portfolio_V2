<script setup lang="ts">
import BoxExpecialization from '@/components/BoxExpecialization.vue';
import { Specialization} from '@/data/Specialization';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();


</script>

<template>
    <div>
        <div class="dark:text-white mt-5 mb-5">
            <h2 class="text-5xl">{{ t('Services') }}</h2>
        </div>
        <div v-for="(item, index) in Specialization" :key="index">
           
            <div class="parent " v-motion-slide-visible-bottom>
                <BoxExpecialization :info="item" >
                    <template v-slot:default>
                        <component :is="item.icon" class="h-6 w-6 son-color" />
                    </template>
                </BoxExpecialization>
            </div>
        </div>
    </div>
</template>