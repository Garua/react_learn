import React, {StrictMode,PureComponent} from 'react';
import PropTypes from 'prop-types';
import Home from "./Home";
import Profile from "./Profile";


// 检测不安全的生命周期,
class App extends PureComponent {
    render() {
        return (
            <div>
                <StrictMode>
                    <Home/>
                </StrictMode>
                <Profile/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;