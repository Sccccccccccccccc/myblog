import request from "../../../index";

export const getArticleList = function (params:any) {
    return request.get({
        url: 'http://localhost:3000/list',
        params
    })
  }