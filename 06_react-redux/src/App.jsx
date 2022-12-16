
import Home from "./pages/home";
import Profile from "./pages/profile";
import './style.css'
import React, {PureComponent} from 'react';
import store from "./store";
import About from "./pages/about";
import Category from "./pages/category";

class  App extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter:store.getState().counter.counter
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            const state = store.getState().counter
            this.setState({counter:state.counter})
        })
    }

    render() {
        const {counter} = this.state
        return (
            <div className="App">
                <h2>App counter:{counter}</h2>
                <div className='pages'>
                    <Home/>
                    <Profile/>
                    <About/>
                    <Category/>
                </div>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
