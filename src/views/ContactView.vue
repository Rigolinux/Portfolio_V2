<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { ref } from 'vue';


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
    <div>
        <h1>Contact</h1>
        <p>Send us a message!</p>
        <form @submit.prevent="sendEmail">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required>
            <label for="message">Message:</label>
            <textarea id="message" v-model="form.message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<style scoped>
</style>