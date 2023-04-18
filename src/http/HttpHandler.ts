/**
 * @Author zy
 * @Date 2023年3月21日
 * @Title axios自定义方法
 */

import qs from 'qs'
import httpProxy from './http'
import HttpConstant from "./HttpConstant"

export default class HttpHander {
  // constructor() {
    
  // };

  /**
   * @Title 自定义get请求
   * @param url 接口地址
   * @param params 参数
   * @param config none
   * @returns 返回一个axios的get请求
   */
  async get(url: string, params?: object, config?: any){
    if (!params) {
      params = {}
    }
    return await httpProxy({
      url: url,
      method:"Get"
    })
  }

  /**
   * 
   * @param url 地址
   * @param params 参数
   * @param type 类型
   * @param config 
   * @returns 调用post方法
   */
  async post (url: string, params: object | string, type?: string, config?: any){
    if (!params) {
      params = {};
    }
    if (!config) {
      config = {}
    }
    if (type == HttpConstant.FORM_DATA_REQ) {
      const configTmp = Object.assign({}, config);
      configTmp["Content-Type"] = HttpConstant.FORM_DATA_REQ;
      params = qs.stringify(params);
    }
    return await httpProxy({
      url: url,
      data:params,
      method:'Post',
    })
    // return axios.post(url, params, config)
  }
}