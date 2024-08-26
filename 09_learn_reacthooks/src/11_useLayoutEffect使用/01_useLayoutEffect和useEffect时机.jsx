import React, {memo, useEffect, useLayoutEffect, useState} from 'react';

const App = memo(() => {
    const [count,setCount] = useState(0)

    // 更新Dom之后执行
    useEffect(()=>{
        console.log('useEffect')
    })

    //更新 Dom之前执行
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
    })

    console.log('App render')
    return (
        <div>
         <h1>Count:{count}</h1>
            <button onClick={e => setCount(count+1)}>+1</button>
        </div>
    );
});

export default App;