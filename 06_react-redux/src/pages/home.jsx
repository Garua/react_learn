import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import store from "../store";
import {addNumberAction} from "../store/counter/";

class Home extends PureComponent {
    constructor() {
        super();
        this.state = {
            // store.getState().counter 得到的是counterReducer(store目录下的index文件)  store合并后,中存放的是reducer对象了.
            counter:store.getState().counter.counter,
            message:'hello world',
            friends:[
                {id:111,name:'why'},
                {id:222,name:'kobe'},
                {id:333,name:'james'},
            ]
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            const state = store.getState().counter
            this.setState({counter:state.counter})
        })
    }

    addNumber(num){
        store.dispatch(addNumberAction(num))
    }
    render() {
        const {counter} = this.state
        return (
            <div>
                <h2>Home Counter: {counter}</h2>
                <div>
                    <button onClick={e => this.addNumber(1)}>+1</button>
                    <button onClick={e => this.addNumber(5)}>+5</button>
                    <button onClick={e => this.addNumber(8)}>+8</button>
                </div>
            </div>
        );
    }
}


export default Home;