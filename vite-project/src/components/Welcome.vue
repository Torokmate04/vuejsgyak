<script setup>
import { ref } from 'vue';
import App from '../App.vue';
import Adatok from './Adatok.json';



const email = ref('')
const pass = ref('')
const error = ref('')

const login = () => {
  if(!email.value || !pass.value){
    error.value = 'Tölktsd ki mindkét mezőt!';
    return
  }
  else{
    error.value = "Sikeres bejelentkezés!"
    App.bool = false;
    return
  }
  
  //itt kéne a jsonfilet letrehozni és felvenni a felhasznalot vagy be léptetni
}

</script>


<template>
    <h1>Taskr</h1>
    <div class="df">
    <h2>A leg<strong>cool</strong>abb task kezelő evör</h2>
    <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </div>
    
    <form class="df">
      <div class="df spinner">
      <font-awesome-icon icon="user-astronaut" />
      </div>
      {{ error }}
        <input type="email" placeholder="EMAIL" v-model="email">
        <input type="password" placeholder="JELSZO" v-model="pass">
        <input @click="login" type="button" value="Login">
       
    </form>
</template>

<style scoped>
  h1 {
    font-size: 7rem;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    text-align: right;
    font-weight: normal;
  }

  img {
    width: 100px;
    height: 100px;
  }

  form {
    background-color: var(--blue);
    border-radius: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin-top: 2rem;
  }

  svg {
    font-size: 3rem;
  }

  input {
    font-size: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--inputBg);
    padding: 0.5rem;
  }

  button {
    background-color: var(--blue);
    color: #fff;
    border: none;
    font-size: 1.5rem;
  }

  .spinner {
    justify-content: center;
  }
  .df{
    display: flex;
    gap: 1rem;
  }
  
</style>