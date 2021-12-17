/****   http.js   ****/
// 导入封装好的axios实例
import request from './request'
import axios, { AxiosRequestConfig } from 'axios';
interface Params {
    [key: string]: any;
}

const http ={
    /**
     * methods: 请求
     * @param url 请求地址 
     * @param params 请求参数
     */
    get(url:string,params?:Params){
        const config : AxiosRequestConfig = {
            method: 'get',
            url:url
        }
        if(params) config.params = params
        return request(config)
    },
    post(url:string,params:Params){
        const config: AxiosRequestConfig = {
            method: 'post',
            url:url
        }
        if(params) config.data = params
        return request(config)
    },
    put(url:string,params:Params){
        const config: AxiosRequestConfig = {
            method: 'put',
            url:url
        }
        if(params) config.params = params
        return request(config)
    },
    delete(url: string , params: Params){
        const config: AxiosRequestConfig = {
            method: 'delete',
            url:url
        }
        if(params) config.params = params
        return request(config)
    }
}
//导出
export default http