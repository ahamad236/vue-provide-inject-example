import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// app.provide('release', 'today')
app.use(router)


app.mount('#app')
