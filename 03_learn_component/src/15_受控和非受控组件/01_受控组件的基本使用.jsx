import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            username:"coderwhy"
        }
    }

    inputChange(e){
        this.setState({username:e.target.value},()=>{
            console.log(this.state.username)
        })
    }

    render() {
        const {username} = this.state
        return (
            <div>
                {/*受控组件*/}
                <input type="text" value={username} onChange={e => this.inputChange(e)}/>
                {/*非受控组件*/}
                <input type="text"/>
                <h2>{username}</h2>
            </div>
        );
    }
}

export default App;