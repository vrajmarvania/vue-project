import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from "./store/index";
import routes from "./routes.js";
import LoadScript from "vue-plugin-load-script";


const router = createRouter({
    history: createWebHistory(),
    routes,
});
createApp(App).use(router).use(VueSweetalert2).use(LoadScript).use(store).mount('#app')