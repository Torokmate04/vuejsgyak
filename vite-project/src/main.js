import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUserAstronaut,} from '@fortawesome/free-solid-svg-icons'

library.add(faUserAstronaut)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
