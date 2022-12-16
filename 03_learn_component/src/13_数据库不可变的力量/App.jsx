import React, {PureComponent,Component} from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            books:[
                {name:'你不知道JS',price:98,count:1},
                {name:'30天精通Java',price:100,count:1},
                {name:'Go语言从入门到放弃',price:88,count:1},
                {name:'Linux操作系统的开关机',price:98,count:1},
                {name:'hello world的3种写法',price:98,count:1},
            ]
        }
    }

    addNewBook(){
        const newBook = {name:'30精神Spring拼写',price:103,count:1}
        // this.state.books.push(newBook)
        // this.setState({books:this.state.books})
        // 上面这种更新,在继承自Component时,可以达到效果,继承自PureComponent,页面无法更新,底层数据未改变(引用)
        const books = [...this.state.books]
        books.push(newBook)
        this.setState({books})
    }
    addBookCount(index){
        console.log(index)
        const books = [...this.state.books]
        books[index].count++
        this.setState({books})

    }
    render() {
        const {books} = this.state
        return (
            <div>
                <h2>数据列表</h2>
                <ul>
                    {
                        books.map((item,index)=>{
                      return (
                          <li key={index}>
                              <span>name:{item.name} - price:{item.price} - count:{item.count}</span>
                              <button onClick={e => this.addBookCount(index)}>+1</button>
                          </li>
                      )
                    })
                    }
                </ul>

                <button onClick={e =>this.addNewBook()}>添加新书籍</button>
            </div>
        );
    }
}

App.propTypes = {};

export default App;