
import React from "react";
import HelloWorld from "./HelloWorld";
class App extends React.Component{

    constructor() {
        super();
        this.state = {
            isShowHW: true
        }
    }


    switchShow(){
        this.setState({
            isShowHW:!this.state.isShowHW
        })
    }

    render() {
        const {isShowHW} = this.state
        return <h2>哈哈哈哈
            <button onClick={(e)=>this.switchShow()}>切换</button>
            {isShowHW && <HelloWorld/>}
        </h2>
    }

}

export default App