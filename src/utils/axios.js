/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import Axios from 'axios'
import { message } from 'antd';

/**
 * 请求配置
 */
const url = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/api' : 'https://zugelu.com/api'
console.log(url);
const axios = Axios.create({
    baseURL: url,
    timeout: 20000, // 请求 20s 超时
});

axios.defaults.headers.common['Authorization'] = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; // 配置请求头（推荐）

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
axios.interceptors.request.use(
    config => {
        // 添加token { username: '默认token', desc: '游客访问博客,需要使用的默认token', _id: null }
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ium7mOiupHRva2VuIiwiZGVzYyI6Iua4uOWuouiuv-mXruWNmuWuoizpnIDopoHkvb_nlKjnmoTpu5jorqR0b2tlbiIsIl9pZCI6bnVsbCwiaWF0IjoxNjExOTEzNDMxLCJleHAiOjQ3Njc2NzM0MzF9.RcB5Bz2l1hoomJBfX6_KjEa4nbjhBKNCvAulDcjfqZg'
        config.headers.Authorization = "Bearer " + token
        return config;
    },
    error => Promise.error(error))

// 响应拦截器
axios.interceptors.response.use(
    /**
     * 传输层：接口正常或异常，用http状态码
     * 业务层：业务正常或异常，用自定义状态码
     */
    // 请求成功
    res => {
        // HTTP 状态码
        if (res.status !== 200) {
            return Promise.reject(res)
        }

        // 业务状态码
        let code = res.data.code
        if (!code || code === 2000) {
            // 无code，则请求的是html页面；有code，则返回请求的数据
            return Promise.resolve(res.data)
        }

        errorHandle(code, res.data.msg);
        return Promise.reject(false)
    },
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            tip('网络出现故障,请稍后再试')
        }
    });

/**
* 提示函数
*/
const tip = msg => {
    message.error(msg);
}

/**
 * 跳转登录页
 */
const toLogin = async (msg) => {
    window.location.reload()
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, msg) => {
    // 状态码判断
    switch (status) {
        // 2002: 用户名/密码错误
        case 2002:
            tip('用户名或密码错误!')
            break;
        // 4001: token无效/未登录状态，跳转登录页
        case 4001:
            toLogin("未登录状态")
            break;
        // 4003: token过期，清除token并跳转登录页
        case 4003:
            toLogin("登录信息过期")
            break;
        // 6001: 会话失效
        case 6001:
            toLogin("会话已失效")
            break;
        // 6002: 未登录
        case 6002:
            tip('请先登录')
            break;
        // 6003: 异地登录
        case 6003:
            toLogin('该账号已在其它地方登录')
            break;
        // 6003: 其他错误
        case 6006:
            tip(msg)
            break;
        default:
            tip('后台维护中，请稍后再试')
    }
}

export { axios }
export default axios