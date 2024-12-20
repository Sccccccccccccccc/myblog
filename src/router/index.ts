import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/home/index.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
            meta: {
                title: '首页',
                keepAlive: true, // 需要缓存
                request: true, // 需要请求
            }
        }
    ]

})

export default router
