import router from "./router";
import pinia from "./store/store";

import { useHomeStore } from '@/store/home';
const store = useHomeStore(pinia)  
const { articleList, getArticleList } = store

router.beforeEach((to, from, next) => {

    console.log("router?", to);
    if( !to.meta.request ){
        next()
    }else {
        if( to.meta.title == '首页'){
            Promise.all([
                getArticleList() // 获取文章列表
                // ...
            ]).finally(() => {
                next()
            })
        }else{
            next()
        }
    }
})