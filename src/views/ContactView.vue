<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const form = ref({
    name: '',
    email: '',
    message: '',
    reply_to: import.meta.env.VITE_EMAILJS_DESTINATION_EMAIL
});

const sendEmail = async () => {
    

    try {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.value,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        alert('Email sent!');
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
};


</script>

<template>
    <div class="dark:text-white mt-5">
        <h1 class="text-5xl">{{ t('Contact') }}</h1>
        <p>Send us a message!</p>
        <form @submit.prevent="sendEmail" >
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="name">Name:</label>
                <input type="text" id="name" placeholder="John Doe"
                class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg custom-focus focus:ring-0 focus:ring-offset-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " v-model="form.name" required>
            </div>
            <div class="mt-4">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="example@gmail.com"
                v-model="form.email" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   custom-focus focus:ring-0 focus:ring-offset-0  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
            </div>
            <div class="mt-4">
                <label for="message">Message:</label>
                <textarea id="message" v-model="form.message"  :placeholder="t('Describe_P')"
                required rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  custom-focus focus:ring-0 focus:ring-offset-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" ></textarea>
            </div>
            <div class="flex justify-end mt-4">
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {{ t('Send') }}
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
</style>