import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import {FontAwasomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import{faUserAstronaut} from '@fortawesome/free-solid-svg-icons'

library.add(faUserAstronaut)

createApp(App)
.component('font-awesome-icon',FontAwasomeIcon)
.mount('#app')
