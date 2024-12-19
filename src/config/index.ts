import Request from "./server/request";

const request = new Request({
    baseURL: "http://localhost:3000",
    timeout: 30000,
    interceptors: {
        requestSuccessFn(config) {
            console.log('requestSuccessFn', config);
            return config;
        },
        responseSuccessFn(res){
            console.log('responseSuccessFn', res);
            return Promise.resolve(res);
        }
    }
});

export default request;
export * from './server/modules'