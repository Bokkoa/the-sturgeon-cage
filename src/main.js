import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vfonts/Lato.css'
// Monospace Font
import 'vfonts/FiraCode.css'

import naive from 'naive-ui'

createApp(App)
    .use(store)
    .use(naive)
    .use(router)
    .mount('#app')
