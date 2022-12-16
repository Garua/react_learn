import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {addNumberAction, subNumberAction} from "../store/counter";

class About extends PureComponent {

    calcNumber(num, isAdd) {
        if (isAdd) {
            this.props.addNumber(num)
            return
        }
        this.props.subNumber(num)

    }

    render() {
        const {counter,banners,recommends,userInfo} = this.props
        return (
            <div>
                <h2>About Page:{counter}</h2>
                <div>{userInfo.nickname}</div>
                <div>
                    <button onClick={e => this.calcNumber(6, true)}>+6</button>
                    <button onClick={e => this.calcNumber(88, true)}>+88</button>
                    <button onClick={e => this.calcNumber(6, false)}>-6</button>
                    <button onClick={e => this.calcNumber(88, false)}>-88</button>
                </div>
                <div className='banner'>
                    <h2>轮播图数据</h2>
                    <ul>
                        {
                            banners.map((item,index) =>{
                                return (
                                    <li key={index}> {item.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='recommends'>
                    <h2>推荐数据</h2>
                    <ul>
                        {
                            recommends.map((item,index) =>{
                                return (
                                    <li key={index}> {item.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}


// connect()返回值 是一个高阶函数
// state中可能有很多状态,这里只映射部分状态给About组件的props
// function mapStateToProps(state) {
//     return {
//         counter:state.counter,
//         // banner:state.banner
//     }
// }
// 下面是简写
const mapStateToProps = (state) => ({
    counter: state.counter.counter,
    banners: state.home.banners,
    recommends: state.home.recommends,
    userInfo:state.user.userInfo
})

// dispatch(action) 到props
const mapDispatchToProps = (dispatch) => ({
    // 下面两种xxxNumber意思一样,简写而已
    addNumber: function (num) {
        dispatch(addNumberAction(num))
    },
    subNumber(num) {
        dispatch(subNumberAction(num))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(About);