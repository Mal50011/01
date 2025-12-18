<script setup>
import { ref } from 'vue'
import Input from '../Input/Input.vue'
import Button from '../Buttons/ButtonDefault.vue'
import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

const form = ref({
    email: '',
    password: ''
})

const emit = defineEmits(['call'])

const call = () => {
    
    api.post('/login', {
        email: form.value.email,
        password: form.value.password
    })
    .then(function(response) {
        console.log('Успех:', response.data)
        emit('call', { ...form.value })
    })
    .catch(function(error) {
        console.error('Ошибка:', error)
        emit('call', { ...form.value })
    })
    
}

</script>


<template>

    <form @submit.prevent="call">
        <Input label="email" placeholder="Email" required="1" type="email" v-model="form.email" />
        <Input label="password" placeholder="Password" required="1" type="password" v-model="form.password" />

        <Button type="submit" text="Send" full_w="1" />

    </form>

</template>



<style scoped>

</style>