import {ApiResponse} from "@/common/api-response.ts";

const apiClient = axios.create({

    baseURL: "https://work-api.xiejiahe.com",
    timeout: 10000,//请求超时时间，ms
    headers: {
        'Content-Type': 'application/json'
    }

})


import axios, {AxiosResponse} from "axios";


apiClient.interceptors.request.use(config => {

        // 在请求发送前做一些事情，例如添加 token
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 处理请求错误
        return Promise.reject(error);
    })


apiClient.interceptors.response.use(
    (resp:AxiosResponse<ApiResponse>) :AxiosResponse<ApiResponse> | Promise<AxiosResponse<ApiResponse>> => {
        if (resp.status.toString().startsWith('2')){
            return resp;
        }else {
            return Promise.reject(new Error(`${resp.status}: ${resp.statusText}`));
        }
    }
    ,err => {
        return Promise.reject(err);
    }
);



apiClient.interceptors.response.use(
    (response: AxiosResponse<ApiResponse>): AxiosResponse<ApiResponse> | Promise<AxiosResponse<ApiResponse>> => {
        // 判断状态码是否以2开头
        if (response.status.toString().startsWith('2')) {
            // 状态码以2开头，表示成功
            return response;
        } else {
            // 抛出一个错误，表明响应状态不在2xx范围内
            return Promise.reject(new Error('Unexpected response status: ' + response.status));
        }
    },
    error => {
        // 处理响应错误
        return Promise.reject(error);
    }
);


export default apiClient