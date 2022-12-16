import React, {PureComponent} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {changeBannersAction, changeRecommendsAction, fetchHomeMultidataAction} from "../store/actionCreators";

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
        dispatch(fetchHomeMultidataAction())
    }
})
const mapStateToProps = (state) =>({
    counter : state.counter
})
export default connect(mapStateToProps,mapDispatchToProps)(Category);