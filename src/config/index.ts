import Request from "./server/request";


const request = new Request({
    baseURL: "http://localhost:3000",
    timeout: 30000,

    interceptors: {
        responseSuccessFn(res: any) {
            return res.data;
        },
    }

});

export default request;
