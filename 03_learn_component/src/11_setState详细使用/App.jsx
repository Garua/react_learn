import React, {Component} from 'react';
import {flushSync} from "react-dom";

class App extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello World",
            counter: 0
        }
    }

    changeText() {
        // react 18之前 ,setTimeout操作是一个同步操作
        // react 18之后 ,setTimeout中的setState是异步操作(批处理)
        setTimeout(()=>{
            // 同步更新
           flushSync(()=> this.setState({message:'hell my god!!!'}))
            console.log(this.state.message)
        },0)

    }
    increment(){

    }

    render() {
        const {message,counter} = this.state
        return (
            <div>
                <h2>message:{message}</h2>
                <button onClick={e =>this.changeText()}>修改文本</button>
                <h2>当前计数: {counter}</h2>
                <button onClick={e => this.increment()}>counter+1</button>
                <button>counter-1</button>
            </div>
        );
    }
}

export default App;