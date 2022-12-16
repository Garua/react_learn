
import * as actionType from './constants'
import axios from "axios";
import {changeBannersAction, changeRecommendsAction} from "../../store(备份1)/actionCreators";
export const addNumberAction = num =>({
    type:actionType.ADD_NUMBER,
    num
})

export const subNumberAction = num =>({
    type:actionType.SUB_NUMBER,
    num
})

export  const fetchHomeMultidataAction = ()=>{
    // 如果是一个普通的action需要返回一个对象
    // 问题:对象中是不能拿到从服务器请求的异步数据的
    // return {}

    // function foo(dispatch,getState){ // 派发时,此函数会自动执行,同时此函数会被传入两个参数,dispatch,和getState
    //     // 异步操作:网络请求
    //     console.log('foo------------',dispatch,getState().counter)
    //     axios.get('http://123.207.32.32:8000/home/multidata').then(res =>{
    //         const banners = res.data.data.banner.list
    //         const recommends = res.data.data.recommend.list
    //         dispatch(changeRecommendsAction(recommends))
    //         dispatch(changeBannersAction(banners))
    //     })
    // }
    // // 如果直接返回一个函数,那么redux是不支持的,
    // return foo


    return function(dispatch,getState){ // 派发时,此函数会自动执行,同时此函数会被传入两个参数,dispatch,和getState
        // 异步操作:网络请求
        console.log('foo------------',dispatch,getState().counter)
        axios.get('http://123.207.32.32:8000/home/multidata').then(res =>{
            const banners = res.data.data.banner.list
            const recommends = res.data.data.recommend.list
            dispatch(changeRecommendsAction(recommends))
            dispatch(changeBannersAction(banners))
        })
    }
    // 如果直接返回一个函数,那么redux是不支持的,
}