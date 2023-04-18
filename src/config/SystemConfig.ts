/*
 * @Author: zy
 * @Date: 2023-04-11 14:21:34
 * @Last Modified by: zy
 * @Last Modified time: 2023-04-11 15:41:49
 * @Title 系统配置
 */// Export the system configuration object
const systemConfig = {
  title: "硕博宝典", // 项目名称
  homePage: {
    name: "首页",
    path: "/homeView"
  },
  auth: false, // 是否校验登录
  sign: false, // 是否开启签名
  sso: true, // 是否开启单点登录
  storate: {
    expireTime: 1000 * 60 * 60 * 3,
    sessionStorageKey: "SESSION",
    localStorageKey: "LOCAL"
  },
  ras: {
    open: true,
  },
  defaultColor:{
    mainColor: '#008df7',
    secondColor: '#008df7',
  },
};

export default systemConfig;

