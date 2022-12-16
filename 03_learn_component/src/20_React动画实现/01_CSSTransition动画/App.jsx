import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from "react-transition-group";
import './style.css'
class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
        }
        this.sectionRef = createRef()

    }

    render() {
        const {isShow} = this.state
        return (
            <div>
                <button onClick={e => this.setState({isShow:!isShow})}>切换</button>
                {/*{isShow &&  <h2>哈哈哈哈</h2>}*/}

                {/* classNames */}
                <CSSTransition in={isShow}
                               nodeRef={this.sectionRef}
                               unmountOnExit={true}
                               classNames='why'
                               appear
                               timeout={2000}
                                onEnter={e => console.log('开始进入动画')}
                                onEntering={e => console.log('执行进入动画')}
                                onEntered={e=> console.log('执行进入结束')}>
                    <h2>哈哈哈哈</h2>
                </CSSTransition>
            </div>
        );
    }
}

App.propTypes = {};

export default App;