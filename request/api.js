import { get, post ,formDatapost} from './http'

// export const baseUrl='http://localhost:8080/api';
// export const baseUrl='http://192.168.0.24:8080/api';

// export const baseUrlApi=p => baseUrl;

//登录和注册页面
export const loginApi = p => post('/login', p);//登录Api
export const areaListApi = p => get('/areaList', p);//国际电话 区号

//主页面
export const checkInfoApi = p => post('/checkInfo', p);//验证用户信息

