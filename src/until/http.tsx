/*
 * @Author: liuyichen
 * @Date: 2022-08-01 10:44:05
 * @LastEditors: liuyichen
 * @LastEditTime: 2022-09-16 10:46:07
 * @FilePath: \代码仓库\shop_dev_react\src\until\http.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyichen, All Rights Reserved. 
 */

import { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios"
import { RequestOptions } from "http";
// axios
export default class Request {
  // 保存axios实例
  private axiosInstance: AxiosInstance;
  // 保存请求公共配置，所有Request实例的请求都共用的这个配置 (只读属性) 也可以传进来配置项
  private readonly options: AxiosRequestConfig;
  constructor(options: AxiosRequestConfig) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    // debugger
    this.axiosInstance.defaults.headers.common['Authorization']  = 'Bearer ' + localStorage!.getItem('token') || ''
    // 查看实例配置  config.headers.Authorization = 'Bearer ' + token
    // console.log(this.axiosInstance.defaults.headers.Authorization = 'Bearer ' + token)
  }
  
  // 提供一个方法可以修改当前保存的axios实例
  setAxios(config: AxiosRequestConfig): void {
    this.axiosInstance = axios.create(config);
  }
  // 获取当前axios实例
  getAxios() {
    return this.axiosInstance;
  }
  // 请求的方法 axios  
  // curRequestOptions是每个请求都可以有自己配置的options，用于覆盖公共的配置
  request<T = any>(config: AxiosRequestConfig, curRequestOtions?: RequestOptions): Promise<T> {
    console.log(curRequestOtions)
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<T>(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // 重载
  get<T = any>(url: string, data: any): Promise<T>;
  get<T = any>(config: AxiosRequestConfig, curRequestOtions?: RequestOptions): Promise<T>;
  // get请求
  get(config: string | AxiosRequestConfig, data: any = undefined) {
    let conf: AxiosRequestConfig = {};
    let options = undefined;
    if (typeof config === 'string') {
      conf.url = config;
      conf.params = data;
    } else {
      conf = config;
      if (data) {
        options = data;
      }
    }
    return this.request({ ...conf, method: 'GET' }, options);
  }

  post<T = any>(url: string, data: any): Promise<T>;
  post<T = any>(config: AxiosRequestConfig, curRequestOtions?: RequestOptions): Promise<T>;
  post(config: string | AxiosRequestConfig, data: any = undefined) {
    let conf: AxiosRequestConfig = {};
    let options = undefined;
    if (typeof config === 'string') {
      conf.url = config;
      conf.params = data;
    } else {
      conf = config;
      if (data) {
        options = data;
      }
    }
    return this.request({ ...conf, method: 'POST' }, options);
  }


}
export const request = new Request({});