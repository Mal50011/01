<script setup>
import { ref } from 'vue'


// defineProps({
  
// })

const data = ref([
    {
        fio: 'Апинян Гор Нарекович',
        h1: 'Загаловок 1',
        h2: 'Загаловок 2',
        status: 0,
        h3: 'Загаловок 3',
        h4: 'Загаловок 4',
    },
    {
        fio: 'Апинян Гор Нарекович',
        h1: 'Загаловок 1',
        h2: 'Загаловок 2',
        status: 0,
        h3: 'Загаловок 3',
        h4: 'Загаловок 4',
    },
    {
        fio: 'Апинян Гор Нарекович',
        h1: 'Загаловок 1',
        h2: 'Загаловок 2',
        status: 0,
        h3: 'Загаловок 3',
        h4: 'Загаловок 4',
    },
    {
        fio: 'Апинян Гор Нарекович',
        h1: 'Загаловок 1',
        h2: 'Загаловок 2',
        status: 0,
        h3: 'Загаловок 3',
        h4: 'Загаловок 4',
    },
])

</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th>ФИО</th>
                <th>Загаловок</th>
                <th>Загаловок</th>
                <th>Статус</th>
                <th>Загаловок</th>
                <th>Загаловок</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in datat">
                <td>{{item.fio}}</td>
                <td>{{item.h1}}</td>
                <td>{{item.h2}}</td>
                <td>{{item.status}}</td>
                <td>{{item.h3}}</td>
                <td>{{item.h4}}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    


</style>