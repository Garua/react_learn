
import React from 'react'
class HelloWorld extends React.Component{
    constructor() {
        console.log('init constructor')
        super();
        this.state  = {
            message:"Hello World"

        }


    }
    componentDidMount() {

        console.log('Hello World componentDidMount')
    }

    // 监听组件卸载,从DOM中移除
    componentWillUnmount() {
        console.log('Hello World componentWillUnmount')

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Hello World componentDidUpdate')
    }
    changeText(){
        this.setState({
            message:"你好啊,嘿嘿!"
        })
    }

    render() {
        console.log("Hello World render....")
        const {message} = this.state
        return  <div>
            <h2>{message}</h2>
            <h2>HelloWorld</h2>
            <button onClick={(e)=> this.changeText()}>修改文本</button>
        </div>
    }

}

export default HelloWorld