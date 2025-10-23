import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { Button, Badge, FrappeUI } from 'frappe-ui/src'

let globalComponents = {
  Badge,
}

let app = createApp(App)

app.use(FrappeUI)
app.use(router)

for (let key in globalComponents) {
	app.component(key, globalComponents[key])
}

app.mount('#app')
