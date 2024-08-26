import React, {memo, useContext, useEffect, useState} from 'react';

import './style.css'
import {useScrollPosition} from "./hooks";

// 监听滚动位置
const Home = memo(()=>{
    return <h1>Home Page</h1>
})

const About = memo(()=>{
    const [scrollX,scrollY] = useScrollPosition()
    return <h1>About Page:X {scrollX},Y {scrollY}</h1>
})
const App = memo(() => {
    return (
        <div className='app'>
            <h1>App Root Component</h1>
           <Home/>
            <About/>

        </div>
    );
});

export default App;