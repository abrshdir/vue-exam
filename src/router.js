import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "./components/Home";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/account' },
        { path: '/account', component: HomePage },
    ]
});

export default router;
