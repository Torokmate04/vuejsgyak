<script setup>
import { ref } from 'vue';

const show = ref(false)
</script>

<template>
<nav>
    <ul>
        <li @mouseenter="show = true" @mouseleave="show = false">
            Services
            <ul v-show="show">
                <li>Web dev</li>
                <li>Mobile dev</li>
                <li>Api dev</li>
            </ul>
        </li>
        <li>Contant</li>
        <li>About</li>
    </ul>
</nav>
</template>

<style scoped>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
ul{
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    align-items: flex-start;

}
li{
    background-color: violet;
    color: white;
    font-weight: bold;

    width: 10rem;

}
ul ul{
    flex-direction: column;
    position: absolute;
    background-color: violet;
    animation: show 350ms ease-in-out;
}
@keyframes show {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
    
}
</style>