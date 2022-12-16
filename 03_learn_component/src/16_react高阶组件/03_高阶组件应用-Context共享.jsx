import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import enhanceUserInfo from "./hoc/enhanced_props";
import About from "./pages/About";



//给一些需要特殊数据的组件,注入props


const Home = enhanceUserInfo(function(props){
    return <h1>Home:{props.name} - {props.level}-{props.banners}</h1>
})

const Profile = enhanceUserInfo(function Profile(props){
    return <h1>Profile:{props.level}</h1>
})


const HelloFriend = enhanceUserInfo(function HelloFriend(props){
    return <h1>HelloFriend:{props.name}</h1>
})


class App extends PureComponent {
    render() {
        return (
            <div>
                <Home banners={['1111','2222','3333']}/>
                <Profile/>
                <HelloFriend/>
                <About/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;