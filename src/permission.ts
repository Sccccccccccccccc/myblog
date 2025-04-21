import router from "./router";
import pinia from "./store/store";

import { useHomeStore } from '@/store/home';
const store = useHomeStore(pinia)  
const { 
    articleList, 
    getArticleList, // 获取文章列表
    getArticleById, // 获取文章详情
    getRandomTitle, // 获取随机标题
} = store

router.beforeEach((to, from, next) => {

    if( !to.meta.request ){
        next()
    }else {
        if( to.meta.title == '首页'){
            Promise.all([
                getArticleList(), 
                getRandomTitle(),
                // ...
            ]).finally(() => {
                next()
            })
        }else if( to.meta.title == '文章详情'){            
            getArticleById(to.query).then( (res) => {
                next()
            })
        }else {
            next()
        }
    }
})