import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './style.css'
class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            books: [
                {id:111,name: '你不知道JS', price: 98, count: 1},
                {id:222,name: '30天精通Java', price: 100, count: 1},
                {id:333,name: 'Go语言从入门到放弃', price: 88, count: 1},
                {id:444,name: 'Linux操作系统的开关机', price: 98, count: 1},
                {id:555,name: 'hello world的3种写法', price: 98, count: 1},
            ]
        }
    }
    addBook(){
        const books = [...this.state.books]
        books.push({id:new Date().getTime(),name:'golang进阶',price:100,count:1})
        this.setState({books})
    }

    delBook(index){
        const books = [...this.state.books]
        books.splice(index,1)
        this.setState({books})
    }
    render() {
        const {books} = this.state
        return (
            <div>
                <h2>书籍列表</h2>
                <TransitionGroup component="ul">
                    {
                        books.map((item,index)=>{
                            return <CSSTransition key={item.id} classNames='book' timeout={1000}>
                               <li>
                                   <span>{item.name}-{item.price}</span>
                                   <button onClick={e =>this.delBook(index)}>删除</button>
                               </li>
                            </CSSTransition>
                        })
                    }
                </TransitionGroup>
                <button onClick={e => this.addBook()}>添加书籍</button>
            </div>
        );
    }
}

App.propTypes = {};

export default App;