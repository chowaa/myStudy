// 管理多个api文件
import httpProxy from "../utils/request";// 拿到封装好的axios
import { URL } from "../config";//根据环境变量拿到的域名服务地址
import { Api } from "./models";//导入接口返回类型

/** 请求接口：Api 
 ** 接口地址：https://api.thecatapi.com/v1/images/search
 ** 返回格式：json/html
 ** 请求方式：get/post
 ** 请求示例：https://api.thecatapi.com/v1/images/search
 ** 请求参数说明：

 ** 名称	必填	类型	说明
 **  format	否	string	选择输出格式[json|text|js]
 ** 返回参数说明：
 **
 ** 名称	类型	说明
  **  code	string	返回的状态码
  **  content	string	返回文本信息
  **  msg	string	返回错误提示信息！
 * 
*/

// 参数泛型 <T extends Record<string, any>>  表示，给我的参数类型，必须约束于对象形式 即{key：value,...}模式，key类型string，value类型为any   &&&&&  可根据实际情况变更此params类型
export async function getApi<T extends Record<string, any>>(params: T | undefined) {
  // 返回参数类型
  return await httpProxy<Api>({
    url: '/search',
    method: "GET",
    // params,
  })
}