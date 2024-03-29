import { get, post ,formDatapost} from './http'

// export const baseUrl='http://localhost:8080/api';
// export const baseUrl='http://192.168.0.24:8080/api';

// export const baseUrlApi=p => baseUrl;

//登录和注册页面
export const loginApi = p => post('/login', p);//登录Api
export const areaListApi = p => get('/areaList', p);//国际电话 区号

//主页面
export const checkInfoApi = p => post('/checkInfo', p);//验证用户信息
export const getArticleApi = p => post('/article', p);//获取主页文章信息
export const getVedioApi = p => post('/vedio', p);//获取视频页面
export const searchApi = p => post('/search', p);//获取搜索内容
export const getHotListApi = p => post('/getHotList', p);//获取热门列表
export const settingApi = p => post('/setting', p);//获取热门列表



