import React, {PureComponent} from 'react';
import ThemeContext from "./context/theme_context";
import Product from "./pages/Product";
import Cart from "./pages/Cart";


class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            isLogin:false
        }
    }

    loginClick(){
        localStorage.setItem('token','coderwhy')
        this.setState({isLogin:true})
        // this.forceUpdate() 强制更新,执行render
    }
    render() {
        const {isLogin} = this.state
        return (
            <div>

                App.......
                {/*{isLogin ? <Cart/> : '请先登录再查看'}*/}
            <button onClick={e => this.loginClick()}>登录</button>
                <Cart/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;