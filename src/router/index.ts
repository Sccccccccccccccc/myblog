import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/home/index.vue'
import ArticleView from '@/views/article/article.vue'
import Layout from '@/components/layout/index.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/',
            name: 'Layout',
            meta: {
                name: 'Layout'
            },
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: HomeView,
                    meta: {
                        title: '首页',
                        keepAlive: true, // 需要缓存
                        request: true, // 需要请求
                    }
                },
                {
                    path: '/article',
                    name: 'article',
                    component: ArticleView,
                    meta: {
                        title: '文章详情',
                        keepAlive: true, // 需要缓存
                        request: true, // 需要请求
                    }
                }
            ]
        },

    ]

})

export default router
