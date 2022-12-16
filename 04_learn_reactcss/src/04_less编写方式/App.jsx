import React, {PureComponent} from 'react';
import './App.less'

class App extends PureComponent {
    render() {
        return (
            <div className='app'>
                <div className='section'>
                    <h2 className='title'>我是标题</h2>
                    <p className='content'>我是内容,哈哈哈哈</p>
                    App......
                </div>
            </div>
        );
    }
}

App.propTypes = {};

export default App;