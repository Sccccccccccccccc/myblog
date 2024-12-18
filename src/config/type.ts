import type { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'

// 请求拦截器
interface Interceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: any) => any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: any) => any
  responseFailureFn?: (err: any) => any
}

// axios的默认配置
export interface defaultRequestConfig<T = AxiosResponse> extends CreateAxiosDefaults {
  interceptors?: Interceptors<T>
}

// 自定义配置
export interface customRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: Interceptors<T>
}
