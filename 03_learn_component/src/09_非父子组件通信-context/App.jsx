import React, {Component} from 'react';
import Home from "./Home";
import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context";
import Profile from "./Profile";
// 创建一个 context 上下文


class App extends Component {

    constructor() {
        super();
        this.state = {
            info:{name:'kobe',age:30}
        }
    }
    render() {
        const {info} = this.state
        return (
            <div>
                <h2>App</h2>
                {/*1 给home传递数据*/}
                {/*<Home name='why' age={18}/>*/}
                {/*/!*直接传递对象参数*!/*/}
                {/*<Home {...info}/>*/}
            {/*    2 普通的home
            通过context中的provider中的value属性为后代提供属性
            */}
               <UserContext.Provider value={{nickname:"kobe",age:30}}>
                   <ThemeContext.Provider value={{color:'red',size:'30'}}>
                       <Home {...info}/>
                   </ThemeContext.Provider>
               </UserContext.Provider>
                <Profile/>
            </div>
        );
    }
}

export default App;