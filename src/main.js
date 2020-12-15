import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/bootscss/bootstrap.scss'
import './assets/main.scss'

createApp(App).use(router).mount('#app')
