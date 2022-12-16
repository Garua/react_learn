import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {addNumber} from "../store/features/counter";
import {fetchHomeMultidataAction} from "../store/features/home";


class Home extends PureComponent {
    addNumber(num){
        this.props.addNumber(num)
    }
    componentDidMount() {
        this.props.fetchHomeMultidata()
    }

    render() {
        const {counter} = this.props
        return (
            <div>
             <h2>Home Counter:{counter}</h2>
                <button onClick={e => this.addNumber(5)}>+5</button>
                <button onClick={e => this.addNumber(10)}>+10</button>
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    counter:state.counter.counter
})

const mapDispatchToProps = (dispatch)=>({
    addNumber(num){
        dispatch(addNumber(num))
    },
    fetchHomeMultidata(){
        dispatch(fetchHomeMultidataAction({name:'loocc'}))
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);