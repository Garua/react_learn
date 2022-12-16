// 不能用import,node环境,commonjs
const {createStore} = require("redux")
// 初始化数据
const initialState = {
    name: 'why',
    counter: 1000
}

// 定义reducer函数
// 接收两个参数,参数1,目前的state,参数2,dispatch传入的action
// 返回值,会作为store之后存储的state
// state = initialState,为undefined时设置默认值
function reducer(state = initialState, action) {
    // 有新数据更新 ,返回新的state
    if (action.type === 'change_name') {
        return {...state, name: action.name}
    } else if (action.type === 'change_counter') {
        return {...state,counter:state.counter + action.num}
    }
    // 没有就返回之前的state
    return initialState
}


// store
const store = createStore(reducer)

module.exports = store