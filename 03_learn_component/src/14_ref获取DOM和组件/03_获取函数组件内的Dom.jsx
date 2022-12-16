import React, {createRef, forwardRef, PureComponent} from 'react';

// 函数式组件,需要转发到具体的元素,使用forwardRef高阶函数
const Hello = forwardRef(function Hello(props, ref){
        return <h2 ref={ref}>函数组件</h2>
    }
)

class App extends PureComponent {
    constructor() {
        super();
        this.hwRef = createRef()
    }

    getComponent() {
        console.log(this.hwRef.current)
    }

    render() {
        return (
            <div>
                <Hello ref={this.hwRef}/>
                <button onClick={e => this.getComponent()}>获取组件实例</button>
            </div>
        );
    }
}


export default App;