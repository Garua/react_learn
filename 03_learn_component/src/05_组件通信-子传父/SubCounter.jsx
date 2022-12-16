import React, {Component} from 'react';
import ProTypes from "prop-types";
class AddCounter extends Component {

    subCount(count){
        console.log('count: ',count)
        this.props.subClick(count)
    }

    render() {
        return (
            <div>
                <button onClick={e => this.subCount(1)}>-1</button>
                <button onClick={e => this.subCount(5)}>-5</button>
                <button onClick={e => this.subCount(10)}>-10</button>
            </div>
        );
    }
}

AddCounter.propTypes = {
    addClick:ProTypes.func
}

export default AddCounter;