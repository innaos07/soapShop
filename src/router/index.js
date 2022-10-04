import {createRouter, createWebHashHistory} from 'vue-router';
import AppMain from '../page/AppMain.vue';
import AppCatalog from '../page/AppCatalog.vue';
import AppProductCard from '../page/AppProductCard.vue';

import AppAbout from '../components/AppAbout.vue';
import AppPayment from '../page/AppPayment.vue';

const routes = [
    {path: '/', component: AppMain},
    {path: '/catalog', component: AppCatalog },
    {path: '/catalog/:id', component: AppProductCard },
    {path: '/about', component: AppAbout},
    {path: '/payment', component: AppPayment},
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;