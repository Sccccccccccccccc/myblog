import request from "../../../index";

// 文章列表
export const getArticleList = function (query?:any) {
    return request.get({
        url: '/article/article-list',
        params: query,
    })
  }

// 文章详情
export const getArticleById = function (query?:any) {        
    return request.get({
        url: '/article/article-detail',
        params: query,
    })
}
