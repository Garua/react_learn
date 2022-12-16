import React, {Component} from 'react';
import Home from "./Home";
import eventBus from "./utils/event-bus";
class App extends Component {

    constructor() {
        super();
        this.state = {
            name:"",
            age:0,
            height:0
        }
    }


    componentDidMount() {
        // 监听事件,需要处理this问题
        eventBus.on("bannerPre",this.bannerPreClick,this)
        eventBus.on("bannerNext",this.bannerNextClick.bind(this))
    }

    bannerPreClick(name,age,height){
        console.log('App中监听到事件bannerPre event',name,age,height)
        console.log(this)
        // this.setState({name, age, height})
    }
    bannerNextClick(info){
        console.log('App中监听到事件bannerNext event',info)
        console.log(this)
        // this.setState({name, age, height})
    }

    componentWillUnmount() {
        // 取消监听
        eventBus.off("bannerPre",this.bannerPreClick)
    }

    render() {
        const {name,age,height} = this.state
        return (
            <div>
                <h2>App Component:{name} - {age} - {height}</h2>
                <Home/>
            </div>
        );
    }
}

export default App;