
import React from "react";
class App extends React.Component{
    constructor() {
        super();
        this.state = {
            message:"App component"
        }
    }
    render() {
        const {message} = this.state
        return <h2>{message}</h2>
    }
}

export default App;
