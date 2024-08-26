import React, {memo, useId, useState, useTransition} from 'react';
import namesArray from "./namesArray";
const App = memo(() => {
     const [showNames,setShowNames] = useState(namesArray)
    // 第一个是布尔值
     const [pending,setTransition] = useTransition()

    function valueChangeHandle(e){
         const keyword = e.target.value

        // 列表过虑渲染很慢(数据很多)导致用户在输入或者删除输入内容时,输入框中的内容不会立刻变化(因为要执行数据过虑,再渲染列表数据),
        // 所以可以把数据过虑和渲染列表数据放到 setTransition的回调函数中(降低优先级?),
       setTransition(()=>{
           const filterShowNames = namesArray.filter(item=> item.includes(keyword))
           setShowNames(filterShowNames)
       })
    }
    return (
        <div>
            <input type="text" onInput={valueChangeHandle}/>
            <h2>用户名列表: { pending && <span>数据正在加载</span>}</h2>
            <ul>
                {
                    showNames.map((item,index) =>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
});

export default App;