import React, {memo, useId, useState} from 'react';

const App = memo(() => {
    const id = useId()
    const [count, setCount] = useState(0)
    console.log(id)
    return (
        <div>
            <h1> App- {id}: {count}</h1>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <br/>
            <label htmlFor={id}>
                用户名:<input id={id} type="text"/>
            </label>
        </div>
    );
});

export default App;