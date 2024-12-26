import router from "./router";
import pinia from "./store/store";

import { useHomeStore } from '@/store/home';
const store = useHomeStore(pinia)  
const { 
    articleList, 
    getArticleList, // 获取文章列表
    getArticleById, // 获取文章详情
} = store

router.beforeEach((to, from, next) => {

    // console.log("router?", to);
    if( !to.meta.request ){
        next()
    }else {
        if( to.meta.title == '首页'){
            next()
            Promise.all([
                getArticleList(), 
                // ...
            ]).finally(() => {
                next()
            })
        }else if( to.meta.title == '文章详情'){            
            // next()
            // Promise.all([
            //     getArticleById(to.query.id as string),
            // ]).finally(() => {
            //     console.log("文章详情", to.query);
            //     next()
            // })
            console.log("'文章详情'",typeof to.query);
            
            getArticleById(to.query).then( (res) => {
                next()
            })
        }else {
            next()
        }
    }
})