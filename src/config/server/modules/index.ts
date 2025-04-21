export * from './articleList/index'
import request from "../../index";

export const getRandomTitle = function (query?:any) {
    return request.get({
        url: '/index/randomTitle',
        params: query,
    })
}