import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import CapsuleButton from './components/js/CapsuleButton';

import App from './App.vue';
import router from './router';
// import { VuePlugin } from 'vuera';

const app = createApp(App);

// app.use(VuePlugin);
app.use(createPinia());
app.use(router);
app.component('CapsuleButton', CapsuleButton);

app.mount('#app');
