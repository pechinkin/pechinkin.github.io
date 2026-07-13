import { createRouter, createWebHistory } from 'vue-router';
import MainView from "../views/MainView.vue";

const routes = [
    { path: '/', component: MainView },
];

const router = createRouter({
    // Передаем тот же базовый путь, что и в Vite
    history: createWebHistory('/didj2/didj2build/'),
    routes,
});

export default router;