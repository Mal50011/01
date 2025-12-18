<script setup>
import { ref, watch } from 'vue'


const props = defineProps({
  name: String,
  type: String,
  label: String,
  placeholder: String,
  errorMsg: String,
  successMsg: String,
  required: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue || '')

watch(value, (newValue) => {
  emit('update:modelValue', newValue)
})

watch(() => props.modelValue, (newValue) => {
  value.value = newValue
})

</script>

<template>
   <div class="inputBlock">
        <label for="inp_lab">{{ label }}</label>
        <input :type="type" :name="name" id="inp_lab" :placeholder="placeholder"  :required="required" v-model="value"/>
        <span class="errorMsg" >{{ errorMsg }}</span>
        <span class="successMsg" >{{ successMsg }}</span>
   </div>
</template>

<style scoped>
    .inputBlock{
        min-width: 92px;
        height: 66px;
        width: 100%;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: start;
        background: #fff;
        border: none;
        border-radius: 8px;
        padding: 10px;
    }
    .inputBlock > input{
        width: 100%;
        background: transparent;
        border: none;
        color: #000;
        outline: none;
        font-size: 20px;
        position: relative;
        padding: 9px 16px;
        border-radius: 8px;
    }
    .inputBlock > input:focus{
        height: -webkit-fill-available;
        border: 1px solid blue;
    }
    .inputBlock > span{
        display: none;
        font-size: 14px;
        position: absolute;
        bottom: -12px;
        left: 16px;
        background: #fff;
        border-radius: 8px;
        padding: 0 10px;
    }
    .inputBlock:focus-within > input:valid{
        border: 1px solid blue;
    }
    .inputBlock:focus-within > input:valid ~ span.successMsg{
        display: block;
        color: #000;
    }
    .inputBlock:focus-within > input:invalid{
        border: 1px solid red;
    }
    .inputBlock:focus-within > input:invalid ~ span.errorMsg{
        display: block;
        color: red;
    }
    .inputBlock:focus-within > label {
        position: absolute;
        color: #000;
        background: #fff;
        top: 0px;
        padding: 0 5px;
    }
    .inputBlock > label{
        position: relative;
        color: #000;
        z-index: 1;
        left: 16px;
        top: 8px;
    }

</style>