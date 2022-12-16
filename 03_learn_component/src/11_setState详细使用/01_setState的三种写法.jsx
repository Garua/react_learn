import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello World",
            counter: 0
        }
    }

    changeText(){
        // 1 setState更多用法
        // 1. 基本使用
        // this.setState({
        //     message:"aaa"
        // })

        // 2 .接收一个回调函数
        // 好处一,可以编写新的state逻辑
        // 好处二,当前的回调函数会把之前的state和props传递进来
        // this.setState((state,props)=>{
        //     console.log(state)
        //     return {message:"DDDDDD"}
        // })

        // 3 setState在react的事件处理中是一个异步调用
        // 如果希望数据更新之后(数据合并),获取到对应的结果执行一些人代码逻辑
        this.setState({
            message:'Hi moxixi'
        },()=>{
            // 这里能拿到新值
            console.log('+++++++++++',this.state.message)

        })
        // 这里打印的message还是原来的Hello World
        console.log('-----------',this.state.message)
    }
    render() {
        const {message,counter} = this.state
        return (
            <div>
                <h2>message:{message}</h2>
                <button onClick={e =>this.changeText()}>修改文本</button>
                <h2>当前计数: {counter}</h2>
                <button>counter+1</button>
                <button>counter-1</button>
            </div>
        );
    }
}

export default App;