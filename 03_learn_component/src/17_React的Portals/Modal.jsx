import React, {PureComponent} from 'react';
import {createPortal} from "react-dom";

class Modal extends PureComponent {
    render() {
        return (

                createPortal(this.props.children,document.querySelector("#modal"))

        );
    }
}

Modal.propTypes = {};

export default Modal;