import { get, post ,formDatapost} from './http'

export const baseUrl='http://localhost:8080/api';

// export const baseUrlApi=p => baseUrl;

//登录和注册页面
// export const loginApi = p => post(baseUrl+'/login', p);//登录Api
export const areaListApi = p => get(baseUrl+'/areaList', p);//国际电话 区号


