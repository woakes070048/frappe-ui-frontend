import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { Button } from 'frappe-ui'

let app = createApp(App)

app.use(router)

app.component('Button', Button)
app.mount('#app')
