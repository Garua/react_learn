import React, {Component} from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }
    handleSubmitClick(e){
        // 阻止默认事件,刷新浏览器
        e.preventDefault()
        // 获取表单数据,
        console.log(this.state.username,this.state.password)
        // 提交
    }

    // handleUserNameChange(e){
    //     this.setState({username:e.target.value})
    // }
    // handlePasswordChange(e){
    //     this.setState({password:e.target.value})
    // }
    handleInputChange(e){
        const keyName =
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        const {username,password} = this.state
        return (
            <div>
                <form onSubmit={e => this.handleSubmitClick(e)}>
                    {/*当点击用户里面的文本时(用户名),input框会自动变成选中状态,htmlFor(原生html中,是for属性)要与 input的id对应 */}
                    <label htmlFor='username'>
                        用户名: <input id= 'username' value={username}
                                       onChange={e => this.handleInputChange(e)}
                                       type="text"name='username'/>
                    </label>
                    <label htmlFor='password'>
                        密码: <input id='password' value={password}
                                     onChange={e => this.handleInputChange(e)} type="password" name='password'/>
                    </label>
                    <button type='submit'>注册</button>
                </form>
            </div>
        );
    }
}

export default App;