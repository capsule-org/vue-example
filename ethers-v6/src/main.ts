import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import App from './App.vue';
import router from './router';
// import { VuePlugin } from 'vuera';

const app = createApp(App);
const vuetify = createVuetify({});
// app.use(VuePlugin);
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount('#app');
