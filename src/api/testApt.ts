import HttpHandler from "@/http/HttpHandler";

const http: HttpHandler = new HttpHandler();

export default class pendingBillingApi {

  constructor() {
  }


  getData(params?:object){
    let url = '/api/getShuobo';
    return http.get(url,params);
  }
  login(params: object){
    let url = 'api/login'
    return http.post(url, params)
  }
  sendData(params: object){
    let url = '/api/sendData';
    return http.post(url, params)
  }
}
