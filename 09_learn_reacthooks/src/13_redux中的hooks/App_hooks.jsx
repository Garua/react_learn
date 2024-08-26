import React, {memo} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {addNumber, subNumber} from "./store/modules/counter";

const App = memo((props) => {
    // useSelector 将redux中store的数据映射到组件内
    const {counter} = useSelector((state)=>{
        return {
            counter:state.counter.counter
        }
    })
    // 使用dispatch直接派发action
    const dispatch = useDispatch()
    function addNumberHandle(num,isAdd=true){
        if(isAdd){
            dispatch(addNumber(num))
            return
        }
        dispatch(subNumber(num))
    }
    return (
        <div>
            <h1>App : {counter}</h1>
            <button onClick={e =>addNumberHandle(1,true)}>+1</button>
            <button onClick={e =>addNumberHandle(6,true)}>+6</button>
            <button onClick={e =>addNumberHandle(6,false)}>-6</button>
        </div>
    );
});
export default App