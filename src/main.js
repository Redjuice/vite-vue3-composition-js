import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import stores from './stores'

const app = createApp(App)
app.use(stores)
app.mount('#app')
