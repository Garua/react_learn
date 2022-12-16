import React, {StrictMode,PureComponent} from 'react';
import PropTypes from 'prop-types';

class Home extends PureComponent {
    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount')
    }
    render() {
        console.log('home')

        return (
            <div>
                    Home
                </div>

        );
    }
}

Home.propTypes = {};

export default Home;