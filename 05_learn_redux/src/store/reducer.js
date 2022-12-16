
// 定义reducer函数
// 接收两个参数,参数1,目前的state,参数2,dispatch传入的action
// 返回值,会作为store之后存储的state
// state = initialState,为undefined时设置默认值
const {CHANGE_NAME, ADD_NUMBER} = require("./constants");
const {createStore} = require("redux")

// 初始化数据
const initialState = {
    name: 'why',
    counter: 1000
}
function reducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE_NAME:
            return {...state,name:action.name}
        case ADD_NUMBER:
            return {...state,counter: state.counter + action.num}
        default:
            return state
    }
    // 没有就返回之前的state
    return initialState
}

module.exports = reducer
