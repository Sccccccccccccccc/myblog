import { defineStore } from "pinia";
import { session, local } from '@/utils/storage'
import { getArticleList } from '@/config'

interface IArticle {
    id: number,
    title: string,
    content: string
}

export interface IHome {
    loading: boolean,
    articleList: Array<IArticle>
}

export const useHomeStore = defineStore('home', {
    state: (): IHome => ({
        loading: true,
        articleList: []
    }),
    getters: {},
    actions: {
      setLoading(flag:boolean){
        this.loading = flag
      },

      async getArticleList(){
        // 调用接口
        const res = await getArticleList()
        console.log("getArticleList???", res);
        this.articleList = res
      }

    }
})