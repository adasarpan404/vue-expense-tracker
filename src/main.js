import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'

const app = createApp(App).mount('#app')
app.use(Toast)
