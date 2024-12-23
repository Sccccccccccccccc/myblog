import { defineStore } from "pinia";
import { session, local } from '@/utils/storage'
import { getArticleList } from '@/config'

interface IArticleList {
    total: number,
    list: object[]
}

export interface IHome {
    loading: boolean,
    articleList: IArticleList
}

export const useHomeStore = defineStore('home', {
    state: (): IHome => ({
        loading: true,
        articleList: {
          list: [],
          total: 0
        }
    }),
    getters: {},
    actions: {
      setLoading(flag:boolean){
        this.loading = flag
      },

      async getArticleList(){
        // 调用接口
        const res = await getArticleList()
        console.log("res.data", res);
        if(res.data){
          this.loading = false
          this.articleList = res.data
        }
      }

    }
})