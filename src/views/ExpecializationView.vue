<script setup lang="ts">
import BoxExpecialization from '@/components/BoxExpecialization.vue';
import { Specialization} from '@/data/Specialization';



</script>

<template>
    <div>
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