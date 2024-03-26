<script setup lang="ts">
import { ref } from 'vue'
import {Tecnologies } from '@/data/Tecnologies'
const array = ref(Tecnologies)
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Instala los módulos en Swiper
const modules = [Navigation, Pagination, Autoplay];

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/autoplay';


</script>

<template>
  <div >
    <div class="mx-auto max-w-2xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8 dark:text-white text-black " >
      <h2 class="text-5xl">{{ t('techDes') }}</h2>

      <div class="flex justify-center items-center text-center">
         
            <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="50"
    navigation
    :autoplay="{ delay: 2500, disableOnInteraction: true}"
    :pagination="{ clickable: true }"
   
  >
        <swiper-slide v-for="(item,index) in array" :key="index" style="display: flex; justify-content: center; align-items: center;">
          <div class="flex justify-center items-center text-center mt-5">
            <img :src="item.image" height="200"  width="200" />
            
          </div>
        </swiper-slide>

   </swiper>
          </div>
 </div>
       
     
    






  </div>
</template>
<style >

.swiper-button-next {
  
  color: var(--text-color);
  
}

.swiper-button-prev {
  
  color:  var(--text-color);
}

.swiper-pagination-bullet-active {
  background-color: var(--text-color);
}
/* Puedes añadir estilos personalizados para los botones de navegación aquí si es necesario */
</style>