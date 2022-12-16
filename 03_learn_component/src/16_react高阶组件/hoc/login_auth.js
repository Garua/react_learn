function loginAuth(OriginComponent){
    return props => {
        // 从LocalStorage中获取token
        const token = localStorage.getItem('token')

        if (token) {
            return <OriginComponent  {...props}/>
        }
        return  <h2>请先登录,再跳转到对应的页面中</h2>
    }
}

export default loginAuth