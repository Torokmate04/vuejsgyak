import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCog,faPenNib, faTrash, faIgloo,faPlus,faUserAstronaut,} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus,faPenNib, faTrash,faUserAstronaut, faCog, faIgloo,)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
