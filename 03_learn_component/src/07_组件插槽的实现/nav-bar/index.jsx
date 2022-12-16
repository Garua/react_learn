import React, {Component} from 'react';
import ProTypes from "prop-types";
import './style.css'
class NavBar extends Component {


    //使用 children 实现插槽
    render() {
        const {children} = this.props
        return (
            <div className='nav-bar'>
                {/*放多个时,子元素拿到的children就是数据,一个时,就是该元素*/}
                <div className='left'>{children[0]}</div>
                <div className='center'>{children[1]}</div>
                <div className='right'>{children[2]}</div>
            </div>
        );
    }
}

NavBar.propTypes = {
    // 要求外面只能传一个children
    // children:ProTypes.element
}

export default NavBar;