import React, {PureComponent,Component} from 'react';

class Home extends React.PureComponent {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return false;
    // }

    render() {
        console.log('Home render......')
        return (
            <div>
               <h2> Home Page</h2>
            </div>
        );
    }
}

export default Home;