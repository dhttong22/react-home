import axios from "axios";

// 统一请求的前缀 
axios.defaults.baseURL="http://react.zbztb.cn/site/";


// axios拦截器 
// 发送前 调用一个事件  拦截器
// 发送回来 调用一个事件  拦截器
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  
 
  // 返回什么数据 其他用了 axios 请求的返回值 就是什么数据 
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 1 获取轮播图数据
export const getGoods=()=>axios.get("goods/gettopdata/goods");

export const  getGoodsGroup=()=>axios.get('goods/getgoodsgroup')
