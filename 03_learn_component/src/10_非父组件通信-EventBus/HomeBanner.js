import React, {Component} from 'react';
import eventBus from "./utils/event-bus";
class HomeBanner extends Component {

    preClick(){
        console.log('上一个')
        eventBus.emit("bannerPre","why",18,1.99)
    }
    nextClick(){
        console.log('下一个')
        eventBus.emit("bannerNext",{nickname:'kobe',level:99})
    }
    render() {
        return (
            <div>
                <h2>HomeBanner</h2>
                <button onClick={e => this.preClick()}>上一个</button>
                <button onClick={e => this.nextClick()}>下一个</button>
            </div>
        );
    }
}

export default HomeBanner;