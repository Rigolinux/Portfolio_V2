<script lang="ts" setup>


interface Info {
  period: string;
  header: string;
  description: string;
}

interface Props {
    info: Info;
}

const props = defineProps<Props>()

</script> 

<template>

<div class="parent" > 
    <div class="flex" >
        <div class="h-6 w-6 son-background rounded-full dark:bg-white bg-gray-700 opacity-15  "
            
        >
        </div>
        <div class="ml-3 son-color dark:text-white text-gray-700 "
          
        >
            {{props.info.period}}
        </div>
    </div>
    <div class="border-l-2 ml-3 border-gray-200 dark:border-gray-700  border-circle   dark:text-white ">
        <div class="ml-8 ">
            <br/>
            <div class="text-xl">{{ props.info.header }} </div>
            <div>
                {{ props.info.description }}
            </div>
            <br/>
        </div>
    </div>
</div>


</template>


<style scoped>


</style>
