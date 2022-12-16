import React, {PureComponent} from 'react';
import homeStyle from './Home.module.css'
class Home extends PureComponent {
    render() {
        return (
            <div className={homeStyle.section}>
                <div className={homeStyle.title}>Home,标题</div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;