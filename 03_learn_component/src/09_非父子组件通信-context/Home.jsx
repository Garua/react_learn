import React, {Component} from 'react';
import HomeInfo from "./HomeInfo";
import HomeBanner from "./HomeBanner";

class Home extends Component {
    render() {

        const {name,age} = this.props
        return (
            <div>
                姓名:{name}
                年龄:{age}
                <HomeInfo/>
                <HomeBanner/>

            </div>
        );
    }
}

export default Home;