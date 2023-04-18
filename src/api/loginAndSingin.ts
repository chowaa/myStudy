import HttpHandler from "@/http/HttpHandler";

const http: HttpHandler = new HttpHandler();

export default class loginAndSingin {

  constructor() {
  }

  register(params: object){
    let url = 'api/login/register'
    return http.post(url, params)
  }
  login(params: object){
    let url = '/api/login/login';
    return http.post(url, params)
  }
  logout(params: object){
    let url = '/api/login/logout';
    return http.post(url, params)
  }
}
