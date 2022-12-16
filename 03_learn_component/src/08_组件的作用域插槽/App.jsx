import React, {Component} from 'react';
import TabControl from "./TabControl";

class App extends Component {
    constructor() {
        super();
        this.state = {
            titles:['流行','新款','精选'],
            tabIndex: 0
        }
    }

    tabClick(index){
        this.setState({tabIndex:index})
    }
    getTabItem(item){
        if(item === '流行'){
            return <span>{item}</span>
        }else if(item === '新款'){
            return <button>{item}</button>
        }else{
            return <i>{item}</i>
        }
    }

    render() {
        const {titles,tabIndex} = this.state
        return (
            <div>
                <TabControl titles={titles} tabClick = {index => this.tabClick(index)}
                // itemType={item => <button>{item}</button>}
                    getTabItem={item => this.getTabItem(item)}
                />
                <h1>{titles[tabIndex]}</h1>
            </div>
        );
    }
}

export default App;