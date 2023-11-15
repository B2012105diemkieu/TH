
import { createApp } from 'vue'
import App from './App.vue'

//them bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

//them router vao ung dung
import router from './router';
createApp(App).use(router).mount("#app");


