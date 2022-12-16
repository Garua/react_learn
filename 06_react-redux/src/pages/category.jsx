import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {fetchHomeMultidataAction} from "../store/home/";

class Category extends PureComponent {

    componentDidMount() {
      this.props.fetchHomeMultidata()
    }

    render() {
        return (
            <div>
              <h2>Category Page</h2>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>({
    fetchHomeMultidata(){
        console.log('111111111')
        dispatch(fetchHomeMultidataAction())
    }
})
const mapStateToProps = (state) =>({
    counter : state.counter.counter
})
export default connect(mapStateToProps,mapDispatchToProps)(Category);