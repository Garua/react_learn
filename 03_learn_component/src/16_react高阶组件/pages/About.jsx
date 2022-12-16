import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import enhanceUserInfo from "../hoc/enhanced_props";

class About extends PureComponent {
    render() {
        return (
            <div>
                About...
            </div>
        );
    }
}

About.propTypes = {};

export default enhanceUserInfo(About);