import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Profile extends PureComponent {
    UNSAFE_componentWillMount() {

    }

    render() {
        console.log('profile')
        return (
            <div>
                Profile
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;