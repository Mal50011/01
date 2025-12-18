<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import btn from './components/Buttons/ButtonDefault.vue'
import apple_btn_black from './components/ButtonsAppel/ButtonBlack.vue'
import Input from './components/Input/Input.vue'
import FormLogin from './components/Forms/FormLogin.vue'


const submittedData = ref(null)

const handleFormSubmit = (formData) => {
  submittedData.value = formData
  console.log('Получены данные формы:', formData)
  
  // Здесь можно отправить данные на сервер
  // sendToServer(formData)
}

</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue 1" />

  <apple_btn_black text="Hello uuhuhu" subtext="effewfkwe" href="https://google.com"/>
  <Input label="test" placeholder="Test" successMsg="test" errorMsg="test1" required="1"/>

  <FormLogin @call="handleFormSubmit"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
