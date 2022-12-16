import React, {Component} from 'react';
import NavBar from "./nav-bar";
import NavBar2 from "./nav-bar2";

class App extends Component {
    render() {
        return (
            <div>

                {/*使用children 实现插槽*/}
                <NavBar>
                    <button>按钮</button>
                    <h2>我是标题</h2>
                    <i>斜体文字</i>
                </NavBar>


                {/*使用 props 实现插槽 */}
                <NavBar2
                leftSlot={ <button>按钮</button>}
                centerSlot={ <h2>我是标题</h2>}
                rightSlot={  <i>斜体文字</i>}/>

            </div>
        );
    }
}

export default App;