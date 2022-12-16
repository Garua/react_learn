import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components'
import App from './06_classnames/App';


// ES6:标签模板字符串
// 标签模板字符串的使用
function foo(...args){
    console.log(args)
}

foo('why',18,1.88)

const name = 'why'
const age = 18

// 函数调用
foo`my name is ${name},age is ${age}`










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{color:'purple',size:"50px"}}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
