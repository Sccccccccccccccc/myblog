import Request from "./server/request";


const request = new Request({
    baseURL: "http://localhost:3000",
    timeout: 30000,

    interceptors: {
        requestSuccessFn(config) {
            return config;
        },
    }

});

export default request;
