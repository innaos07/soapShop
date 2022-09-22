import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import components from './components/UI';
import { createPinia } from 'pinia';


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
