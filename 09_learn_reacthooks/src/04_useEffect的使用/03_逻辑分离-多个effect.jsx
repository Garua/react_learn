import React, {memo, useEffect, useState} from 'react';

const App = memo(() => {
    const [counter,setCounter] = useState(0)
    useEffect(()=>{
        // const unsubscribe = store.subcribe(()=>{
        //
        // })

        console.log('模拟监听redux中数据的变化')
        // 消除操作
        return ()=>{
            console.log('移除监听')
        }
    })

    // 可以有多个useEffect,按照编写顺序执行
    return (
        <div>
        <button onClick={e => setCounter(counter+1)}>+1</button>
        </div>
    );
});

export default App;