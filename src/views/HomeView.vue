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
    <div class="mx-auto max-w-2xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8 dark:text-white text-black" >
      <h2 class="text-5xl">{{ t('techDes') }}</h2>

      
         
            <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :autoplay="{ delay: 2500, disableOnInteraction: true}"
    :pagination="{ clickable: true }"
   
  >
        <swiper-slide v-for="(item,index) in array" :key="index">
          <div class="flex flex-col justify-center items-center  ">
            <img :src="item.image"  />
            <div>{{ item.name }}</div>
          </div>
        </swiper-slide>

   </swiper>
            
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
/* Puedes añadir estilos personalizados para los botones de navegación aquí si es necesario */
</style>