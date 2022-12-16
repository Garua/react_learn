import {createSlice} from "@reduxjs/toolkit";

// createSlice 返回值是一个对象,里面包含了所有的actions
const counterSlice = createSlice({
    name:"counter",//用户标记的slice名词
    initialState:{//初始化值
        counter:888
    },
    reducers:{// 相当于之前的reducer函数,对象类型,可以添加很多函数

        // 类似原来redux中的reducer函数的的一个case语句
        addNumber(state,{payload}){
            state.counter = state.counter + payload
        },
        subNumber(state,action){  //   subNumber(state,{payload}){ 可以直接从第二个参数上解构
            console.log('counter reducer subNumber')
            // return {...state,counter:state.counter - action.payload}
            // 这个工具包,可以直接修改state,因为它底层保证了我们如果直接修改state,会返回一个新的state
            // state.counter = state.counter - payload
            state.counter = state.counter - action.payload
        }
    }
})
export const {addNumber,subNumber} = counterSlice.actions
export default counterSlice.reducer