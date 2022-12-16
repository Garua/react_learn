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

    }
    increment(){
        // this.setState({counter:this.state.counter+1})
        // this.setState({counter:this.state.counter+1})
        // this.setState({counter:this.state.counter+1})
        // 上面执行后,点击一次+1,只会加一

        // this.setState(()=>{
        //     return {
        //         counter:this.state.counter+1
        //     }
        //
        // })
        // this.setState(()=>{
        //     return {
        //         counter:this.state.counter+1
        //     }
        //
        // })
        // this.setState(()=>{
        //     return {
        //         counter:this.state.counter+1
        //     }
        //
        // })

        // 以上在给counter赋值时,this.state.counter取到的都为0,
        //  上面执行后,点击一次+1,只会加一


        // 下面这种写法才会点一次,加3,原因是state更新是异步的,多次调用时,会合并一起更新
        this.setState((state)=>{
            return {
                counter:state.counter + 1
            }
        })
        this.setState((state)=>{
            return {
                counter:state.counter + 1
            }
        })
        this.setState((state)=>{
            return {
                counter:state.counter + 1
            }
        })

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