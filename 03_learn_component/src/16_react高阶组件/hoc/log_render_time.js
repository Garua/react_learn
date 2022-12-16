import {PureComponent} from "react";

function logRenderTime(OriginComponent){
    return class extends PureComponent{
        UNSAFE_componentWillMount() {
            this.beginTime = new Date().getTime()
        }

        componentDidMount() {
            this.endTime = new Date().getTime()
            const interval = this.endTime - this.beginTime;
            console.log(`当前${OriginComponent.name}页面渲染耗时${interval}ms`)
            console.log(origin)
        }

        render() {
            return <OriginComponent {...this.props}/>
        }
    }
}


export default logRenderTime