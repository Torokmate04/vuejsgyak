import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {FontAwasomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import{faUserAstronaut} from '@fortawesome/free-solid-svg-icons'

library.add(faUserAstronaut)

createApp(App)
.use('font-awesome-icon',FontAwasomeIcon)
.mount('#app')
