import {createRouter, createWebHashHistory} from 'vue-router';
import AppMain from '../components/AppMain.vue';
import AppCatalog from '../components/AppCatalog.vue';
import AppAbout from '../components/AppAbout.vue';
import AppPayment from '../page/AppPayment.vue';

const routes = [
    {path: '/', component: AppMain},
    {path: '/catalog', component: AppCatalog }, 
    {path: '/about', component: AppAbout},
    {path: '/payment', component: AppPayment},
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;