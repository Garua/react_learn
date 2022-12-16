import React, {Component} from 'react';
import './index.css'
class TabControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex:0
        }
    }
    itemClick(index){
        console.log('index:',index)
        this.setState({currentIndex:index})
        this.props.tabClick(index)
    }

    render() {
        const {titles} = this.props
        const {currentIndex} = this.state
        return (
            <div className='tab-control'>
                {
                    titles.map((item,index) =>{
                        return (
                            <div className={`item ${index === currentIndex ? 'active':''}`}
                                 onClick={e => this.itemClick(index)}
                                 key={item}>
                                <span className='text'>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default TabControl;