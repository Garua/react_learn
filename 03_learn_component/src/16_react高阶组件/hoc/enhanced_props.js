import React, {PureComponent} from "react";

const userInfo = {name:'coderwhy',level:99}

export default function enhanceUserInfo(OriginComponent){
    class NewComponent extends PureComponent{
        constructor() {
            super();
            this.state= {
                userInfo:{name:'coderwhy',level:99}
            }
        }
        render(){
            return <OriginComponent {...this.props} {...this.state.userInfo}/>
        }
    }

    return NewComponent
}