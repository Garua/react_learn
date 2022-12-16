import React, {Component} from 'react';
import MainBanner from "./MainBanner";
import MainProductList from "./MainProductList";
import axios from 'axios'


class Main extends Component {
    constructor() {
        super();
        this.state = {
            // banners:["新歌曲","新MV","新歌单"],
            // productList:["推荐商品","热门商品","流行商品"]

            banners:[],
            productList:[]
        }
    }

    componentDidMount() {

        axios.get("http://123.207.32.32:8000/home/multidata")
            .then(res => {
                console.log('res:',res)
                const banners = res.data.data.banner.list
                const recommend = res.data.data.recommend.list
                console.log('1111:',banners,'2222',recommend)
                this.setState({
                    banners,
                    productList:recommend
                })

            })
    }

    render() {
        const {banners,productList}  = this.state
        return (
            <div className="main">
                <div>Main</div>
                <MainBanner banners={banners} title='参数title'/>
                <MainBanner />
                <MainProductList productList = {productList}/>
            </div>
        );
    }
}

export default Main;