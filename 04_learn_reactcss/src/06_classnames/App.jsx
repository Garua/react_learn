import React, {PureComponent} from 'react';
import classNames from "classnames";

class App extends PureComponent {

    constructor() {
        super();
        this.state = {
            isbbb:false,
            isccc:true
        }
    }
    render() {
        const {isbbb,isccc} = this.state
        const classList = ["aaa"]
        if(isccc)classList.push("ccc")
        if(isbbb)classList.push("bbb")
        const classname =classList.join(" ")
        return (
            <div>
                <h2 className={`aaa ${isbbb ? 'bbb':''} ${isccc ? 'ccc':''}`}>哈哈哈哈</h2>
                <h2 className={classname}>嘿嘿嘿嘿</h2>
                <h2 className={classNames('aaa',{bbb:isbbb,ccc:isccc})}>呵呵呵呵呵</h2>
            </div>
        );
    }
}

App.propTypes = {};

export default App;