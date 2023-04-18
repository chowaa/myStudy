import HttpHandler from "@/http/HttpHandler";

const http: HttpHandler = new HttpHandler();

export default class regionsApi {

  constructor() {
  }

  province(params: object){
    let url = 'api/regions/province'
    return http.post(url, params)
  }//省
  city(params: object){
    let url = 'api/regions/city'
    return http.post(url, params)
  }//市
  regions(params: object){
    let url = 'api/regions/region'
    return http.post(url, params)
  }//区

  getMaxDepartment(params: object){
    let url = 'api/department/getMaxDepartment'
    return http.post(url, params)
  }//一级科室

  getMinDepartment(params: object){
    let url = 'api/department/getMinDepartment'
    return http.post(url, params)
  }//二级科室

  department(params: object){
    let url = 'api/department/department'
    return http.post(url, params)
  }//二级科室
}
