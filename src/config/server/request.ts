import axios from "axios";
import type { AxiosInstance } from 'axios'
import type { defaultRequestConfig, customRequestConfig } from './type'

// 将其封装为一个类，而不是一个函数的原因是因为类可以创建多个实例，适用范围更广，封装性更强。
class Request {
  // axios 实例
  instance: AxiosInstance
  // 基础配置
  constructor(config: defaultRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
        config.interceptors?.requestSuccessFn,
        config.interceptors?.requestFailureFn
    )

    this.instance.interceptors.request.use(
        (config) => {
          return config
        },
        (err) => {
          return err
        }
    )

    this.instance.interceptors.response.use(
        config.interceptors?.responseSuccessFn,
        config.interceptors?.responseFailureFn
    )

    this.instance.interceptors.response.use(
        (config) => {
            return config.data
        },
        (err) => {
            return err
        }
    )

  }

  // 封装网络请求的方法
  request<T = any>(config: customRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any,T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          if (config.interceptors?.responseFailureFn) {
            config.interceptors.responseFailureFn(err)
          }
          reject(err)
        })
    })
  }

  get<T = any>(config: customRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: customRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: customRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  put<T = any>(config: customRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PUT' })
  }
  patch<T = any>(config: customRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Request
