import React, {createRef, PureComponent} from 'react';

class App extends PureComponent {
    constructor() {
        super();
        this.state = {

        }
        this.titleRef = createRef()
        this.titleEl = null
    }
    getNativeDOM(){
        // 1:在react元素上绑定一个ref字符串
        // console.log(this.refs.why)

        // 2:createRef()函数,提前创建
        // console.log(this.titleRef.current)

        // 3:函数回调
        console.log(this.titleEl)
    }
    render() {
        return (
            <div>
                <h1>App.......</h1>
                <h2 ref='why'>Hello World</h2>
                <h2 ref={this.titleRef}>Hello World create Ref </h2>
                <h2 ref={el => this.titleEl = el}>Hello World 函数回调 </h2>
                <button onClick={e => this.getNativeDOM()}>获取DOM</button>
                {/*<button onClick={el => console.log(el)}>获取DOM</button>*/}

            </div>
        );
    }
}

export default App;