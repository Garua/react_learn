import React, {Component} from 'react';
import Header from "./c-cnps/Header";
import Main from "./c-cnps/Main";
import Footer from "./c-cnps/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;