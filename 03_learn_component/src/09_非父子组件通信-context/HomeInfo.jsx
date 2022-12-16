import React, {Component} from 'react';
import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context";

class HomeInfo extends Component {
    render() {
        // 4 获取数据,并使用
        console.log(this.context)
        return (
            <div>
                <h2>HomeInfo : {this.context.color}</h2>
                <UserContext.Consumer>
                    {
                        value => {
                            return (
                                <span>{value.nickname} ---- {value.age}</span>
                            )
                        }
                    }
                </UserContext.Consumer>
            </div>
        );
    }
}

// 3 设置组件的context type 类型
HomeInfo.contextType = ThemeContext

export default HomeInfo;