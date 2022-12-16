import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


function hoc(Cpn){
    // 定义类组件

    // 定义函数组件

    class NewCpn extends PureComponent{
        render() {
            return <Cpn name='why'/>
        }
    }
    return NewCpn
}

class HelloWorld extends PureComponent{
    render() {
        return <h1>HelloWorld</h1>
    }
}

const HelloWorldHoc = hoc(HelloWorld)
class App extends PureComponent {
    render() {
        return (
            <div>
                <HelloWorld/>
                <HelloWorldHoc/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;