
<script setup lang="ts"> 
import IconsMdi from '@/components/IconsMdi.vue';    
import { mdiLanguageTypescript } from '@mdi/js';
</script>
<template>
    <div class="flex flex-col">
  <div class="circle-wrap">
    <div class="circle">
      <div class="mask full-1">
        <div class="fill-1"></div>
      </div>
      <div class="mask half">
        <div class="fill-1"></div>
      </div>
      <div class="inside-circle"> 
        <IconsMdi :path="mdiLanguageTypescript" />
         </div>
    </div>
  </div>
    <div class="circle-wrap">
      <div class="circle">
        <div class="mask full-2">
          <div class="fill-2"></div>
        </div>
        <div class="mask half">
          <div class="fill-2"></div>
        </div>
        <div class="inside-circle"> 65% </div>
      </div>
    </div>
      <div class="circle-wrap">
        <div class="circle">
          <div class="mask full-3">
            <div class="fill-3"></div>
          </div>
          <div class="mask half">
            <div class="fill-3"></div>
          </div>
          <div class="inside-circle"> 75% </div>
        </div>
      </div>
  
</div>
</template>

<style>
.circle-wrap {
  display: grid;
  grid-template-columns: repeat(1, 160px);
  grid-gap: 80px;
  margin-top: 100px;
  margin-left: 50px;
  width: 150px;
  height: 150px;
  background: #d9d7da;
  border-radius: 50%;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill-1,
.circle-wrap .circle .fill-2,
.circle-wrap .circle .fill-3 {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}

.circle-wrap .inside-circle {
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background: var(--bg-color);
  line-height: 120px;
  text-align: center;
  display: flex;
    justify-content: center;
    align-items: center;
  margin-top: 13px;
  margin-left: 13px;
  color: white;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
}

/* color animation */

.mask .fill-1 {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: var(--text-color);
}

.mask.full-1,
.circle .fill-1 {
  animation: fill-1 ease-in-out 3s;
  transform: rotate(153deg);
}

@keyframes fill-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(153deg);
  }
}

/* 2nd bar */

.mask .fill-2 {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: var(--text-color);;
}

.mask.full-2,
.circle .fill-2 {
  animation: fill-2 ease-in-out 3s;
  transform: rotate(117deg);
}

@keyframes fill-2{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(117deg);
  }
}

/* 3rd progress bar */
.mask .fill-3 {
  clip: rect(0px, 75px, 150px, 0px);
  background-color:var(--text-color);
}

.mask.full-3,
.circle .fill-3 {
  animation: fill-3 ease-in-out 3s;
  transform: rotate(135deg);
}

@keyframes fill-3{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
  }
}
</style>