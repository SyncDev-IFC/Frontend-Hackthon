import { registerPlugins } from '@/plugins'
import './plugins/axios';
import pinia from './plugins/pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import '@mdi/font/css/materialdesignicons.min.css';
import './assets/main.css'

import App from './App.vue'
import router from './router'


import { createApp } from 'vue'

const app = createApp(App);

pinia.use(piniaPluginPersistedstate);

registerPlugins(app)
app.use(router)
app.use(pinia)
app.mount('#app')
