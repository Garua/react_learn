import './App.css'
import React, {PureComponent} from 'react';
import Profile from './Profile/Profile'
import Home from './Home/Home'
class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            titleSize:30
        }
    }

  render() {
        const {titleSize} = this.state
    return (
        <div>
         <h2 className='title'>我是标题</h2>
            <p className='content'>我是内容,哈哈哈哈</p>
            <Home/>
            <Profile/>
        </div>
    );
  }
}

App.propTypes = {};

export default App;

