import React, {PureComponent,Component} from 'react';

class Recommend extends PureComponent {
    constructor(props) {
        super(props);
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return true
    // }

    render() {
        console.log('Recommend render......')
        return (
            <div>
                <h2>Recommend Page - props:{this.props.counter}</h2>
            </div>
        );
    }
}

export default Recommend;