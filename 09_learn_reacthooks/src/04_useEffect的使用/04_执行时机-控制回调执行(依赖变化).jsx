import React, {memo, useEffect, useState} from 'react';

const App = memo(() => {
    const [counter,setCounter] = useState(0)
    const [message,setMessage] = useState('hello world')

    useEffect(()=>{
        console.log('修改title')
    },[counter])
    useEffect(()=>{
        console.log('模拟监听redux中数据的变化')
        // 消除操作
        return ()=>{
            console.log('移除监听111')
        }
    },[])

    useEffect(()=>{
        console.log('模拟监听eventBus的why事件')
        // 消除操作
        return ()=>{
            console.log('移除监听222 ')
        }
    },[])

    useEffect(()=>{
        console.log('发送网络请求,获取数据')
        return ()=>{
            console.log('组件卸载时,才会执行一次')
        }
    },[])

    // 可以有多个useEffect,按照编写顺序执行
    return (
        <div>
        <button onClick={e => setCounter(counter+1)}>+1</button>
        <button onClick={e => setMessage('你好啊')}>修改message:{message}</button>
        </div>
    );
});

export default App;