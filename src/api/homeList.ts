import HttpHandler from "@/http/HttpHandler";

const http: HttpHandler = new HttpHandler();

export default class homeList {

  // constructor() {
  // }
  post(params: object){
    const url = 'api/myPost'
    return http.post(url, params)
  }
  departmentList(params: object){
    const url = 'api/department/departmentList'
    return http.post(url, params)
  }
  hospitalList(params: object){
    const url = '/api/hospital/hospitalList';
    return http.post(url, params)
  }
  hospitalHetails(params: object){
    const url = '/api/hospital/hospitalHetails'
    return http.post(url, params)
  }
}
