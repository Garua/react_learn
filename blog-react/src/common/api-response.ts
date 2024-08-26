interface ApiResponse<T = any>{
    status: number;
    data:T,
    message?:string
}

interface LoginPayload{
    loginName:string
    password:string
    code:string
}


export { ApiResponse, LoginPayload }