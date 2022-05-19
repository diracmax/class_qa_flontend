import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index'


const application = createApp(App)
application.use(router)
application.use(store)
application.mount('#app')
