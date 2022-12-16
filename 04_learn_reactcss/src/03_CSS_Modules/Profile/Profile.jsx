import React, {PureComponent} from 'react';
import profileStyle from  './Profile.module.css'
class Profile extends PureComponent {
    render() {
        return (
            <div className={profileStyle.section}>
                <div className={profileStyle.title}>
                    Profile....
                </div>
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;