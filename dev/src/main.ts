import { createApp } from 'vue'
import App from './App.vue'
import Vustom from './../../packages/vustom/src/install.ts'
import router from './router'

var app = createApp(App)
app.use(Vustom)
app.use(router)
app.mount('#app')
