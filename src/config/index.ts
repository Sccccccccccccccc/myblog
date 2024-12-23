import Request from "./server/request";

const request = new Request({
    baseURL: "http://localhost:3000",
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