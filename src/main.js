/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import pinia from './plugins/pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import '@mdi/font/css/materialdesignicons.min.css';

// Components
import App from './App.vue'
import router from './router'
import { setupInterceptors } from '@/plugins/api';


// Composables
import { createApp } from 'vue'

const app = createApp(App);

pinia.use(piniaPluginPersistedstate);

registerPlugins(app)
app.use(router)
app.use(pinia)
app.mount('#app')
