import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import store from "../index";

// 创建异步action,执行网络请求
// 当createAsyncThunk创建出来的action被派发时,会存在三种状态
// pending:action被发出,但是还没有最终结果
// fulfilled:获取到最终结果(有返回值的结果)
// rejected:执行过程中有错误或者抛出了异常
export const fetchHomeMultidataAction = createAsyncThunk('fetch/homemultidata',
    // 会自动把 store传入
    async (extraInfo,{dispatch,getState}) => {
        const res = await axios.get("http://123.207.32.32:8000/home/multidata")
        // 直接返回res,浏览器控制台会报错,无法序列化
        const banners = res.data.data.banner.list
        const recommends = res.data.data.recommend.list
        dispatch(changeBanners(banners))
        dispatch(changeRecommends(recommends))
        return res.data
    })
const obj = {
    name: 'hahaha'
}
const homeSlice = createSlice({
    name: 'home',
    initialState: {
        banners: [],
        recommends: []
    },
    reducers: {
        changeBanners(state, action) {
            console.log(state, action)
            state.banners = action.payload
        },
        changeRecommends(state, {payload}) {
            state.recommends = payload
        }
    },
    // 写法1:计算属性名
    // extraReducers:{// 此reducer针对异常的操作来,比如上面的 fetchHomeMultidataAction
    //     [obj.name]:'why',
    //     [obj.name](){
    //
    //     },
    //     // 计算属性名语法
    //     [fetchHomeMultidataAction.pending](state,action){//可以不写
    //         console.log('fetchHomeMultidataAction pending....')
    //     },
    //     [fetchHomeMultidataAction.fulfilled](state, {payload}){
    //         console.log('fetchHomeMultidataAction fulfilled....',payload)
    //         state.banners = payload.data.banner.list
    //         state.recommends = payload.data.recommend.list
    //     },
    //     [fetchHomeMultidataAction.rejected](state,action){// 也可以不写
    //         console.log('fetchHomeMultidataAction rejected....')
    //     }
    // }
    // 写法2:
    extraReducers: (builder) => {
        // builder.addCase(fetchHomeMultidataAction.pending, (state, action) => {
        //
        // }).addCase(fetchHomeMultidataAction.fulfilled, (state, action) => {
        //     state.banners = action.payload.data.banner.list
        //     state.recommends = action.payload.data.recommend.list
        // }).addCase(fetchHomeMultidataAction.rejected, (state, action) => {
        //
        // })
    }
})

export const {changeBanners, changeRecommends} = homeSlice.actions

export default homeSlice.reducer