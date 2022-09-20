import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import components from './components/UI';
import { createPinia } from 'pinia';
import './assets/styles/index.scss';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// console.log(components)

const app = createApp(App);
const pinia = createPinia();

components.forEach(component => {
    // console.log(component.name, component)
    app.component(component.name, component)
})

app .use(pinia)
    .use(router)
    .mount('#app')
