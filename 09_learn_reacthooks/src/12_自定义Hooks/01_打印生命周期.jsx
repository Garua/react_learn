import React, {memo, useEffect, useState} from 'react';

function useLogLife(name){
    useEffect(()=>{
        console.log(name + '组件被创建')
        return ()=>{
            console.log(name + '组件被销毁')
        }
    },[name])
}

const Home = memo(()=>{
   useLogLife('Home')
    return <h1>Home Page</h1>
})

const About = memo(()=>{
   useLogLife('About')
    return <h1>About Page</h1>
})
const App = memo(() => {
    const [isShow,setIsShow] = useState(true)
   useLogLife('App')
    return (
        <div>
            <h1>App Root Component</h1>
            <button onClick={e => setIsShow(!isShow)}>切换</button>
            {isShow && <Home/>}
            {isShow && <About/>}

        </div>
    );
});

export default App;