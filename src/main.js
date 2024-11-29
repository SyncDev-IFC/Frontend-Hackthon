/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import '@mdi/font/css/materialdesignicons.min.css';

// Components
import App from './App.vue'
import router from './router'

// Composables
import { createApp } from 'vue'

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

registerPlugins(app)
app.use(router)
app.use(pinia)
app.mount('#app')
