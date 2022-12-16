import {createStore,applyMiddleware,compose} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// 正常情况下,store.dispatch(object)
// 想要派发函数,store.dispatch(function)
// 需要中间件 redux-thunk
// 浏览器 redux-devtools工具调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
export default store