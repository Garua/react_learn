import React, {memo, useEffect, useState} from 'react';

const App = memo(() => {
    const [counter,setCounter] = useState(200)

    useEffect(()=>{
        document.title = counter
    })
    return (
        <div>
            <h2>当前计数:{counter}</h2>
            <button onClick={e => setCounter(counter+1)}>+1</button>
        </div>
    );
});

export default App;