import Request from "./server/request";

let local = 'http://localhost:3000';
let prod = 'http://8.138.214.166:3000/'
console.log("当前环境：", import.meta.env) ;

const request = new Request({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 30000,
    interceptors: {
        requestSuccessFn(config) {
            return config;
        },
        responseSuccessFn(res){
            return Promise.resolve(res);
        }
    }
});

export default request;
export * from './server/modules'