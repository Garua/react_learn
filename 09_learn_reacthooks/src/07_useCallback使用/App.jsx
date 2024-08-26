import React, {memo, useCallback, useRef, useState} from 'react';

// props改变时,此组件会重新渲染
const HYIncrement = memo(function (props) {
    const {increment} = props

    console.log('被渲染')
    return (

        <div>
            <button onClick={increment}>increment+1</button>
        </div>
    )

})


// useCallback性能优化的点
// 1.当需要将一个函数传递给子组件时,最好使用useCallback进行优化,将优化后的函数传递给子组件
const App = memo(() => {

    const [count, setCount] = useState(0)
    const [message,setMessage] = useState('hello')
    // 闭包陷阱  多次渲染返回同一个函数,注意后面的[]依赖
    // const increment = useCallback(function foo() {
    //     // 每次渲染时,回调函数foo都是不同的,但是由于使用了useCallback和[]数组依赖,所以increment中引用是第一个次的foo(count为0),
    //     // 而且是个闭包,引用了之前的count
    //     console.log('increment')
    //     // 闭包,一直引用的之前的count(也是就0)
    //     console.log(count)
    //     setCount(count + 1)
    // }, [count]) // 改成[]依赖有bug


    // 进一步优化,当count发生改变时,也使用同一个函数
    // 做法一,将count从依赖中移除,缺点:出现闭包陷阱
    // 做法二,useRef,在组件多次渲染时,返回同一个值
    const countRef = useRef()
    countRef.current = count
    const increment = useCallback(function foo() {
        console.log('increment')
        console.log(countRef)
        setCount(countRef.current + 1)
    }, [])


    // 普通函数
    // const increment = function() {
    //     setCount(count + 1)
    // }
    return (
        <div>
            <h2>计数:{count}</h2>
            <button onClick={increment}>+1</button>
            <HYIncrement increment={increment}/>
            <h2>message:{message}</h2>
            <button onClick={e => setMessage(Math.random())}>修改message</button>
        </div>
    );
});

function foo(name) {

    function bar() {
        console.log(name)
    }

    return bar

}

const bar1 = foo('why')
bar1()

const bar2 = foo('kobe')
bar2()

bar1()
export default App;