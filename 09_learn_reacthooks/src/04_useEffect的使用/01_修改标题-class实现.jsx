import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter:100
        }
    }
    componentDidMount() {
        document.title = this.state.counter
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = this.state.counter

    }

    render() {
        const {counter} = this.state
        return (
            <div>
                <h1>App Page : {counter}</h1>
                <button onClick={e => this.setState({counter:counter+1})}>+1</button>
            </div>
        );
    }
}

App.propTypes = {};

export default App;