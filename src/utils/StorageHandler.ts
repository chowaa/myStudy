/*
 * @Author: zy
 * @Date: 2023-04-11 14:20:09
 * @Last Modified by: zy
 * @Last Modified time: 2023-04-11 14:39:35
 * @Title 存储处理程序
 */
import SystemConfig from "@/config/SystemConfig";
let _ = require("lodash");
export default class StorageHandler {
  /**
   * @description: 构造函数，用于初始化失效时间
   * @param {expireTime: 失效时间}
   * @return:
   */
  constructor(expireTime: number = SystemConfig.storate.expireTime) {
    // 默认失效时间为1小时
    // 此处的this指向StorageHandler类的实例对象
    if (_.isNumber(expireTime) && expireTime >= 0) {
      this.expireTime = expireTime;
    }
  }





  /**
   * @description: 存储为指定Storage
   * @param {key: 键名, value: 键值, type: 存储类型, expireTime: 失效时间}
   * @return:
   */
  private expireTime: number = 3600000;

  setStorage(key: string, value: any, type: string, expireTime: number): void {
    if (_.isNumber(expireTime) && expireTime >= 0) {
      this.expireTime = expireTime;
    }
    if (type === 'LOCAL') {
      this.setLocalStorage(key, value);
    } else {
      this.setSessionStorage(key, value);
    }
  }



  /**
   * @description: 从指定Storage中获取某项
   * @param {key: 键名, type: 存储类型}
   * @return:
   */
  getStorage(key: string, type: string): any {
    if (type === SystemConfig.storate.localStorageKey) {
      return this.getLocalStorage(key);
    } else {
      return this.getSessionStorage(key);
    }
  }



  /**
   * @description: 从指定Storage中移除某项
   * @param {key: 键名, type: 存储类型}
   * @return:
   */
  removeStorage(key: string, type: string): void {
    if (type === SystemConfig.storate.localStorageKey) {
      this.removeLocalStorage(key);
    } else {
      this.removeSessionStorage(key);
    }
  }



  /**
   * 清空指定Storage
   */
  clearStorage(type: string): void {
    if (type === SystemConfig.storate.localStorageKey) {
      this.clearLocalStorage();
    } else {
      this.clearSessionStorage();
    }
  }



  /**
   * @description: 存储为localStorage
   * @param {key: 键名, value: 键值}
   * @return:
   */
  setLocalStorage(key: string, value: any): void {
    const curtime: number = new Date().getTime(); // 获取当前时间 ，转换成JSON字符串序列
    const valueDate: string = JSON.stringify({
      val: value,
      timer: curtime
    });
    try {
      localStorage.setItem(key, valueDate);
    } catch (e) {
      // 兼容性写法
      if (this.isQuotaExceeded(e)) {
        console.log("Error: 本地存储超过限制");
        localStorage.clear();
      } else {
        console.log("Error: 保存到本地存储失败");
      }
    }
  }



  /**
   * @description: 获取localStorage存储
   * @param {key: 键名}
   * @return:
   */
  getLocalStorage(key: string): any {
    if (localStorage.getItem(key)) {
      const vals: any = localStorage.getItem(key); // 获取本地存储的值
      const dataObj: any = JSON.parse(vals); // 将字符串转换成JSON对象
      // 如果(当前时间 - 存储的元素在创建时候设置的时间) > 过期时间
      const isTimed: boolean = new Date().getTime() - dataObj.timer > this.expireTime;
      if (isTimed) {
        console.log("存储已过期");
        localStorage.removeItem(key);
        return null;
      } else {
        const newValue: any = dataObj.val;
        return newValue;
      }
    } else {
      return null;
    }
  }



  /**
 * @description: 移除localStorage存储
 * @param {key: 键名}
 * @return:
 */
  removeLocalStorage(key: string): void {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  }



  /**
   * @description: 清空localStorage
   * @param {key: 键名}
   * @return:
   */
  clearLocalStorage() {
    localStorage.clear();
  }

  /**
   * @description: 存储为sessionStorage
   * @param {key: 键名, value: 键值}
   * @return:
   */
  setSessionStorage(key: string, value: any): void {
    const curtime: number = new Date().getTime(); // 获取当前时间 ，转换成JSON字符串序列
    const valueDate: string = JSON.stringify({
      val: value,
      timer: curtime
    });
    try {
      sessionStorage.setItem(key, valueDate);
    } catch (e) {
      // 兼容性写法
      if (this.isQuotaExceeded(e)) {
        console.log("Error: 本地存储超过限制");
        sessionStorage.clear();
      } else {
        console.log("Error: 保存到本地存储失败");
      }
    }
  }



  /**
   * @description: 获取sessionStorage存储
   * @param {key: 键名}
   * @return:
   */
  getSessionStorage(key: string): any {
    if (sessionStorage.getItem(key)) {
      const vals: any = sessionStorage.getItem(key); // 获取本地存储的值
      const dataObj: any = JSON.parse(vals); // 将字符串转换成JSON对象
      // 如果(当前时间 - 存储的元素在创建时候设置的时间) > 过期时间
      const isTimed: boolean = new Date().getTime() - dataObj.timer > this.expireTime;
      if (isTimed) {
        console.log("存储已过期");
        sessionStorage.removeItem(key);
        return null;
      } else {
        const newValue: any = dataObj.val;
        return newValue;
      }
    } else {
      return null;
    }
  }



  /**
   * @description: 移除SessionStorage存储
   * @param {key: 键名}
   * @return:
   */
  removeSessionStorage(key: string): void {
    if (sessionStorage.getItem(key)) {
      sessionStorage.removeItem(key);
    }
  }



  /**
   * @description: 清空sessionStorage
   * @param {key: 键名}
   * @return:
   */
  clearSessionStorage() {
    sessionStorage.clear();
  }

  /**
   * @description: 判断异常是否为超过浏览器存储大小限制
   * @param {e: any}
   * @return {boolean}
   */
  isQuotaExceeded(e: any): boolean {
    let quotaExceeded = false;
    if (e) {
      if (e.code) {
        switch (e.code) {
          case 22:
            quotaExceeded = true;
            break;
          case 1014: // Firefox
            if (e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
              quotaExceeded = true;
            }
            break;
        }
      } else if (e.number === -2147024882) {
        // IE8
        quotaExceeded = true;
      }
    }
    return quotaExceeded;
  }


}
