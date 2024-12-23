import { defineStore } from "pinia";
import { session, local } from '@/utils/storage'
import { getArticleList } from '@/config'

interface IArticleList {
    total: number,
    list: any[]
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

      async getArticleList(params?:any){
        // 调用接口
        try {
          const res = await getArticleList(params)
          if(res.data){
            this.loading = false
            this.articleList = res.data
          }
        } catch (error) {
          console.log(error);
        }

      }

    }
})