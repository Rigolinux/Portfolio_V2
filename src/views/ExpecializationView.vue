<script setup lang="ts">
import BoxExpecialization from '@/components/BoxExpecialization.vue';
import { ServerIcon, RectangleGroupIcon } from "@heroicons/vue/24/outline";
import { Specialization} from '@/data/Specialization';
const icons = [ServerIcon, RectangleGroupIcon]; // Agrega más iconos aquí si lo necesitas


</script>

<template>
    <div>
        <div v-for="(item, index) in Specialization" :key="index">
           
            <div class="parent" v-motion-slide-visible-bottom>
                <BoxExpecialization :info="item" >
                    <template v-slot:default>
                        <component :is="icons[index % icons.length]" class="h-6 w-6 son-color" />
                    </template>
                </BoxExpecialization>
            </div>
        </div>
    </div>
</template>