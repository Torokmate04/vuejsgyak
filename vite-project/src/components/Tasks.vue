<script setup>
import Adatok from './Adatok.json';
var jsonfile = Adatok;
var tasks = jsonfile[0].tasks;
for(var i = 0; i < jsonfile.length+1; i++){
  var task = tasks[i];
  var tasks_task = task.task;
  var tasks_due_date = task.due_date;
  var tasks_created_at = task.created_at;
  console.log(task);
  console.log(tasks_task);
  console.log(tasks_due_date);
  console.log(tasks_created_at);
}
var count = 0
const addTask = () => {
// itt kéne a json fileba taskokat felvenni 
count ++;
console.log(count)
}
const torol = (taskname) =>{
  //itt meg torolni a taskot
  console.log(taskname)
}
</script>

<template>
    <header>
        <div>
        <img src="../assets/vue.svg" alt="logo">
        <h1>taskR</h1>
    </div>
    </header>
    <main style="display:inline-block;">
      <section v-for="task in tasks">
    <p id="taskname">{{ task.task }}</p>
    <ul>
        <li>{{ task.due_date}}-ig</li>
        <li>{{ task.created_at }}-ban lett létrehozva</li>
        <li style="cursor: pointer; float: right;" @click="torol(task.task)">
            <font-awesome-icon icon="trash"/>
        </li>
    </ul>
  </section> 
</main>
<footer>
        <form @submit.prevent="addTask">
            <input type="text" placeholder="New Task ">
            <input type="date">
            <button><font-awesome-icon icon="plus" /></button>
        </form>

        <nav>
      <ul>
        <li>
            <font-awesome-icon icon="user-astronaut" />
        </li>
        <li class="router-link-active">
            <font-awesome-icon icon="igloo" />
        </li>
        <li>
            <font-awesome-icon icon="cog" />
        </li>
      </ul>
    </nav>

    </footer>
</template>

<style scoped>
section {
    margin: 0.5em;
    padding: 0.5em;
    background-color: v-bind(color);
    border-radius: 0.5em;
  }
  p {
    font-size: 5rem;
    text-align: right;
  }
  footer{
    position: fixed;
    bottom: 0;
    height: 20vh;
}

footer form {
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
    background-color: var(--blue);
    border-radius: 0.5rem;
    margin: 0.5rem;
  }
  footer input[type='text'] {
    background-color: var(--blue);
    color: #fff;
    width: 60vw;
    font-size: 1.5rem;
  }
  footer input[type='date'] {
    background-color: var(--blue);
    width: 20vw;
  }
  footer input::placeholder {
    color: #fff8;
  }
  footer button {
    width: 1.75rem;
    height: 1.75rem;
    border: none;
    border-radius: 50%;
    font-size: 1.25rem;
    color: var(--blue);
  }
  nav ul {
    background-color: var(--blue);
    width: 100vw;
    height: 4.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  nav svg {
    font-size: 3rem;
  }
  nav li {
    padding-bottom: 0.25rem;
    border-radius: 0.25rem;
  }
  .router-link-active {
    padding-bottom: 0.5em;
    border-bottom: 0.25rem solid #fff;
  }
  a {
    color: #fff;
  }
  header {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 10vh;
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    background-color: #302b27;
  }

  header div {
    display: flex;
    align-items: center;
  }

  header img {
    height: 100%;
    width: auto;
    margin: 0 0.5rem;
  }

  header h1 {
    display: inline-block;
  }

  header svg {
    margin: 0.25rem;
  }
  #taskname{
    text-align: justify;
    font-size: 3rem;
    height: 5rem;
    width: auto;
  }
</style>