// 不能用import,node环境,commonjs
const {createStore} = require("redux")
const {ADD_NUMBER,CHANGE_NAME} = require('./constants')
const reducer = require('./reducer')
// 初始化数据
const initialState = {
    name: 'why',
    counter: 1000
}

// 定义reducer函数
// 接收两个参数,参数1,目前的state,参数2,dispatch传入的action
// 返回值,会作为store之后存储的state
// state = initialState,为undefined时设置默认值
// function reducer(state = initialState, action) {
//
//     switch (action.type) {
//         case CHANGE_NAME:
//             return {...state,name:action.name}
//         case ADD_NUMBER:
//             return {...state,counter: state.counter + action.num}
//         default:
//             return state
//     }
//     // 没有就返回之前的state
//     return initialState
// }


// store
const store = createStore(reducer)

module.exports = store