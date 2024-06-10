import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './assets/styles.css';
import axios from 'axios';

const app = createApp(App);

app.config.globalProperties.$http = axios.create({
  baseURL: 'http://localhost:3000'
});

app.use(router);
app.mount('#app');