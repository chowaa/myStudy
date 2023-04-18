/**
 * @Author: zy
 * @Date: 2020-10-30 14:16:50
 * @Last Modified by: zy
 * @Last Modified time: 2020-10-30 15:39:15
 * @Title http常量部分
 */
const HttpConstant = {

  // 请求content-type类型
  "FORM_DATA_REQ": 'application/x-www-form-urlencoded',
  "APPLICATION_JSON_REQ": 'application/json',
  "MUL_FORM_REQ":"multipart/form-data",

  // 响应状态
  "SUCCESS_CODE": 200,

  // 响应消息
  "ADD_SUCCESS_MSG" : "添加成功",
  "ADD_FAILD_MSG" : "添加失败",
  "UPDATE_SUCCESS_MSG" : "更新成功",
  "UPDATE_FAILD_MSG" : "更新失败",
  "DELETE_SUCCESS_MSG" : "删除成功",
  "DELETE_FAILD_MSG" : "删除失败",
}

export default HttpConstant
