import {createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunk from "redux-thunk";
import counterReducer  from './counter'
import homeReducer  from './home'
import userReducer  from './user'

// 正常情况下,store.dispatch(object)
// 想要派发函数,store.dispatch(function)
// 需要中间件 redux-thunk
// 浏览器 redux-devtools工具调试
const reducer = combineReducers({
    counter:counterReducer,
    home:homeReducer,
    user:userReducer
})

// combineReducers实现原理
// function reducer(state={},action){
//
//     console.log(state.home,state.counter,state.user,'222222222')
//     // 返回一个对象,作为store中的state
//     return {
//         // 下面三行,相当于都传入undefined,最终会被赋值默认值,见方法形参上的赋值操作
//         counter:counterReducer(state.counter,action),
//         home:homeReducer(state.home,action),
//         user:userReducer(state.user,action)
//     }
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
export default store