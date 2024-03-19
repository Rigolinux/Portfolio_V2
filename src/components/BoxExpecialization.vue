<script setup lang="ts">
import { useI18n} from 'vue-i18n';
interface Info {
  title: string;
  description: string;
}

interface Props {
    info: Info;
}
const { t } = useI18n();
const props = defineProps<Props>()

</script>
    
<template>
    <div class="flex justify-center items-center ">
        <div class="lg:w-4/5 w-4/5 min-h-40 parent-shadow xl:w-full hoverable-borders  border-gray-200 dark:border-gray-700   rounded-md border-2 my-5">
           <div class="mt-3 mx-5 mb-4 dark:text-white text-black  ">
                <div class="flex justify-between">
                    <h2 class=" text-3xl"> {{ t(props.info.title) }}</h2>
                    <slot>
                    </slot>
                </div>
                <div class="opacity-60">
                    <p>  {{ t(props.info.description) }}</p>
                </div>
           </div>
        </div>
    </div>
</template>

<style scoped>
</style>
