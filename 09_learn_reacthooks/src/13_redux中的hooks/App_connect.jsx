import React, {memo} from 'react';
import {connect} from "react-redux";
import {addNumber, subNumber} from "./store/modules/counter";

const App = memo((props) => {
    function addNumberHandle(num,isAdd=true){
        if(isAdd){
            props.addNumber(num)
            return
        }
        props.subNumber(num)
    }
    return (
        <div>
            <h1>App :{props.counter}</h1>
            <button onClick={e =>addNumberHandle(1,true)}>+1</button>
            <button onClick={e =>addNumberHandle(6,true)}>+6</button>
            <button onClick={e =>addNumberHandle(6,false)}>-6</button>
        </div>
    );
});
const mapStateToProps = (state) =>({
    // 前一个counter是index中的模块名称,后一个是对应模块中的state
  counter:state.counter.counter
})

const mapDispatchToProps =(dispatch) =>({
    addNumber(num){
        dispatch(addNumber(num))
    },
    subNumber(num){
        dispatch(subNumber(num))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(App);