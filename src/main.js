import { createApp  , markRaw } from 'vue'
import './style.css'
import './axios'
import App from './App.vue'
import router from './router'
import { createPinia, storeToRefs } from 'pinia'

const app = createApp(App);
const pinia = createPinia();

pinia.use(({store})=>{
    store.router = markRaw(router);
});

app.use(router);
app.use(pinia);
app.mount('#app');
