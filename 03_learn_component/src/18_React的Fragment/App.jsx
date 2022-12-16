import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            sections: [
                {title:"哈哈哈哈",content:"我是内容,哈哈哈哈"},
                {title:"呵呵呵呵",content:"我是内容,呵呵呵呵"},
                {title:"嘿嘿嘿嘿",content:"我是内容,嘿嘿嘿嘿"},
                {title:"嘻嘻嘻嘻",content:"我是内容,嘻嘻嘻嘻"},
                {title:"嗷嗷嗷嗷",content:"我是内容,嗷嗷嗷嗷"},
            ],
        }
    }
    render() {
        const {sections} = this.state
        return (
            // <div>
            //     <h2>我是App的标题</h2>
            //     <p>我是App的内容</p>
            // </div>

            // <Fragment>
            //     <h2>我是App的标题</h2>
            //     <p>我是App的内容</p>
            // </Fragment>


        <>
            <h2>我是App的标题</h2>
            <p>我是App的内容</p>

            <hr/>
            {
                sections.map(item =>{
                    return (
                        <Fragment key={item.title}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </Fragment>
                    )
                })
            }
        </>

        );
    }
}

App.propTypes = {};

export default App;