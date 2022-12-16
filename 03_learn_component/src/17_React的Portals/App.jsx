import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from "react-dom";
import Modal from "./Modal";
// 渲染的内容独立于父组件
class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>App.......h1</h1>
                {
                    createPortal(<h2>App.......h2</h2>,document.getElementById("why"))
                }
                {
                    <Modal>
                        <h2>我是标题</h2>
                        <p>我是内容,哈哈哈哈</p>
                    </Modal>
                }
            </div>
        );
    }
}

App.propTypes = {};

export default App;