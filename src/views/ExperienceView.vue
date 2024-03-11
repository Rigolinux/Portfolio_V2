<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();


</script>
<template>
    <div class="dark:text-white text-black ">
        <div class="text-4xl text-center">
            <h1>{{ t('welcome')}} {{ t('description_2') }}
                <span class="custom-text-color">{{ t('Rigo') }}</span>,
                {{ t('description_1') }}
            </h1>
        </div>
        <p class="dark:text-gray-600 text-black dark:text-opacity-40 mt-3 text-center">
            {{ t('description_3') }}
        </p>
        <div class="flex justify-evenly mt-3">
           
                <div class="flex flex-col items-center" v-motion-roll-visible-bottom :delay="600" >
                    <h1 class="custom-text-color text-4xl">2+</h1>
                    <p>{{ t('years_experience') }}</p>
                </div>
          
           <div class="flex flex-col items-center" v-motion-roll-visible-right
            :delay="600"
           >
                <h1  class="custom-text-color text-4xl ">10+</h1>
                <p>{{ t('completed_projects')  }}</p>
           </div>
        </div>
    </div>
</template>


<style scoped>
.slide-up-enter-active {
    transition: all 1s;
}
.slide-up-enter-from {
    transform: translateY(100%);
}
.slide-up-enter-to {
    transform: translateY(0);
}

</style>

