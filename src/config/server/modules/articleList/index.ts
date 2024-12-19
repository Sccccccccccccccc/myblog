import request from "../../../index";

export const getArticleList = function (params?:any) {
    return request.get({
        url: '/list',
        params
    })
  }