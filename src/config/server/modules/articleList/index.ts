import request from "../../../index";

export const getArticleList = function (query?:any) {
    return request.get({
        url: '/list',
        params: query,
    })
  }