import React, {memo, useCallback, useEffect, useRef, useState} from 'react';

let obj = null
const App = memo(() => {

    const [count,setCount] = useState(0)
    const nameRef = useRef()
    console.log(obj === nameRef)
    obj = nameRef

    // 通过useRef解决闭包陷阱
    const countRef = useRef()
    countRef.current = count
    const increment = useCallback(()=>{
        setCount(countRef.current + 1)
    },[])
    return (
        <div>
            <h2>Hello World:{count}</h2>
            <button onClick={e => increment()}>+1</button>

        </div>
    );
});

export default App;