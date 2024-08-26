import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class HomeRecommend extends PureComponent {
    render() {
        return (
            <div>
                <h2>Banner</h2>
                <h2>歌单的列表</h2>
                <ul>
                    <li>歌单数据01</li>
                    <li>歌单数据02</li>
                    <li>歌单数据03</li>
                </ul>
            </div>
        );
    }
}

HomeRecommend.propTypes = {};

export default HomeRecommend;