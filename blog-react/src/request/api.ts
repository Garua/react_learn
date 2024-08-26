import {ApiResponse, LoginPayload} from "@/common/api-response.ts";
import apiClient from "@/request/config.ts";
import {AxiosRequestConfig} from "axios";

export function login(payload: LoginPayload) {
    return apiClient.post<ApiResponse>("/api/passport/local", payload);
}
export function getCaptcha(code:string,config?:AxiosRequestConfig) {
    return apiClient.get(`/api/captcha?code=${code}`,{...config})
}





