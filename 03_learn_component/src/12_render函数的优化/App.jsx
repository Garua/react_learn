import React, {PureComponent,Component} from 'react';
import Home from "./Home";
import Recommend from "./Recommend";
import Profile from "./Profile";

class App extends React.PureComponent {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // 控制页面刷新
    //     if(this.state.message !== nextState.message
    //     || this.state.counter !== nextState.counter){
    //         return true
    //     }
    //     return false
    // }

    constructor() {
        super();
        this.state = {
            message:'Hello World',
            counter:0
        }
    }
 changeText(){
        this.setState({message:"你好啊,张三丰"})
 }
 increment(){
        this.setState({counter:this.state.counter+1})
 }
    render() {
        const {message,counter} = this.state
        return (
            <div>
                <h2>App-{message}-{counter}</h2>
                <button onClick={e =>this.changeText()}>修改文本</button>
                <button onClick={e =>this.increment()}>counter+1</button>
                <Home/>
                <Recommend counter={counter}/>
                <Profile message={message}/>
            </div>
        );
    }
}

export default App;