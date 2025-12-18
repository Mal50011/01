<script setup>
import { ref } from 'vue'


defineProps({
  type: String,
  text: String,
  icon: String,
  full_w: String
})

</script>

<template>
    <button :class="'btn ' + ((full_w=='1') ? 'w-100': '')" :type="type">{{ text }}</button>
</template>

<style scoped>
    .btn{
        min-width: 92px;
        height: 54px;
        color: #2563EB;
        background-color: #DBEAFE;
        border: 1px solid #DBEAFE;
        border-radius: 12px;
        padding: 14px 16px;
        text-align: center;
        transition: 300ms;
    }

    .btn.w-100{
        width: 100% !important;
    }

    .btn:hover{
        color: #DBEAFE;
        background-color: #2563EB;
        border: 1px solid #2563EB;
        transition: 300ms;
    }

</style>