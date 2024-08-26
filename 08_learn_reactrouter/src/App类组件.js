import React, {PureComponent} from 'react';
import {Link, Navigate, NavLink, Route, Routes,useNavigate} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Login from "./pages/Login";
import './style.css'
import NotFound from "./pages/NotFound";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";
import Category from "./pages/Category";
import Order from "./pages/Order";
class App extends PureComponent {

    navigateTo(to){
        const navigate = useNavigate()
        navigate(to)
    }
    render() {
        return (
            <div className='app'>
                <div className='header'>
                    <span>header</span>
                    <div className='nav'>
                        <Link to='/home'>首页</Link>
                        <Link to='/about'>关于</Link>
                        <Link to='/login'>登录</Link>
                        <button onClick={e => this.navigateTo('/category')}>分类</button>
                        <span onClick={e => this.navigateTo('/order')}>订单</span>
                        {/*<NavLink to='/home'>首页</NavLink>*/}
                        {/*可以加样式*/}
                        {/*<NavLink to='/about' className={(isActive)=> isActive?"link-active":''}>关于</NavLink>*/}
                        {/*<NavLink to='/about' style={({isActive})=>({color:isActive?'green':'',fontSize:'38px'})}>关于</NavLink>*/}
                    </div>
                    <hr/>
                </div>
                <div className='content'>
                    {/*    配置映射关系*/}
                    <Routes>
                        <Route path='/' element={<Navigate to='/home'/>}/>
                        <Route path='/home' element={<Home/>}>
                            <Route path='/home' element={<Navigate to='/home/recommend'/>}/>
                            <Route path='/home/recommend' element={<HomeRecommend/>}/>
                            <Route path='/home/ranking' element={<HomeRanking/>}/>
                        </Route>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/order' element={<Order/>}/>
                        <Route path='/category' element={<Category/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
                <div className='footer'>
                    <hr/>
                    Footer
                </div>
            </div>
        );
    }
}


export default App;