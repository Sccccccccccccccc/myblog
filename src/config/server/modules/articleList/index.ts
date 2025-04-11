import request from "../../../index";

export const getArticleList = function (query?:any) {
    return request.get({
        url: '/article/article-list',
        params: query,
    })
  }

export const getArticleById = function (query?:any) {        
    return request.get({
        url: '/article',
        params: query,
    })
}