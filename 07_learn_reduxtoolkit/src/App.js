import Profile from "./pages/Profile";
import Home from "./pages/Home";
import './style.css'
import {connect} from "react-redux";

import React, {PureComponent} from 'react';

class App extends PureComponent {
    render() {
        const {counter} = this.props
        return (
            <div className="App">
                <h2>App Counter:{counter}</h2>
                <div className='pages'>
                    <Home/>
                    <Profile/>
                </div>
            </div>
        );
    }
}

const mapStateToProps =(state) =>{
    // state.counter.counter 两个counter,在store目录下的index.js中有,有多个reducer.表示分模块?,然后再取真正的counter state
    console.log('state',state)
    return {
        counter:state.counter.counter

    }
}

export default connect(mapStateToProps)(App);
