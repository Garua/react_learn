import React, {createRef, PureComponent} from 'react';

class Hello extends PureComponent {
    test(){
        console.log('test------------')
    }
    render() {
        return <h1>Hello World</h1>
    }
}


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