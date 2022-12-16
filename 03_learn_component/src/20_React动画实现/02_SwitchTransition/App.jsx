import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import './style.css'
class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    render() {
        const {isLogin} = this.state
        return (
            <div>
                <SwitchTransition mode='out-in'>
                    <CSSTransition key={isLogin ? 'exit' : 'login'}
                                   classNames='login'
                                   timeout={1000}
                    >
                        <button onClick={e => this.setState({isLogin: !isLogin})}>
                            {isLogin ? "退出" : "登录"}
                        </button>
                    </CSSTransition>
                </SwitchTransition>

            </div>
        );
    }
}

App.propTypes = {};

export default App;