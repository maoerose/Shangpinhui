import http from '../utils/http'

// 登录请求
export function login(params){
    return http.post('/login',params)
}