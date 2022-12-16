import React, {Component} from 'react';
import ProTypes from 'prop-types'
class MainBanner extends Component {
    // constructor(props) {
    //     console.log('props:',props)
    //     super();
    // }
    render() {
        console.log(this.props)
        const {title,banners} = this.props
        return (
            <div>
                <h2>封装一个轮播图:{title}</h2>
                <ul>
                    {
                        banners.map(item =>{
                           return  <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
MainBanner.propTypes = {
    banners: ProTypes.array.isRequired,
    title:ProTypes.string.isRequired
}

// 默认值
MainBanner.defaultProps = {
    banners:[],
    title:'默认标题'
}

export default MainBanner;