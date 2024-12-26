import { defineStore } from "pinia";
import { session, local } from '@/utils/storage'
import { getArticleList, getArticleById } from '@/config'

interface IArticleList {
    total: number,
    list: any[]
}

export interface IHome {
    loading: boolean,
    articleList: IArticleList,
    articleDetail: any
}

export const useHomeStore = defineStore('home', {
    state: (): IHome => ({
        loading: true,
        articleList: {
          list: [],
          total: 0
        },
        articleDetail: ''
    }),
    getters: {},
    actions: {
      setLoading(flag:boolean){
        this.loading = flag
      },

      // 获取文章列表
      async getArticleList(params?:any){
        try {
          const res = await getArticleList(params)
          if(res.data){
            this.loading = false
            this.articleList = res.data
          }
        } catch (error) {
          console.log(error);
        }

      },

      // 获取文章详情
      async getArticleById(id:any){
        try {
          const res = await getArticleById(id).then( res => {
            console.log('获取文章详情', res);
            this.articleDetail = res.data
            return res
          })
          // if(res.data){
          //   console.log("获取详情", res.data);
          //   this.loading = false
          //   return res.data
          // }
          
        } catch (error) {
          console.log(error);
        }
      }

    }
})