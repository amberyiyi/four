import React, { Component } from 'react';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './banner.css'

class Banner extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
        }
    }
    render() {
        return (
            <div>
                 <Carousel autoplay>
                <div>
                    <h3><img src={require('./images/freehost.jpg')}  alt="logo" />></h3>
                </div>
                <div>
                    <h3><img src={require('./images/banner2.jpg')}  alt="logo" />></h3>
                </div>
                <div>
                    <h3><img src={require('./images/banner3.jpg')}  alt="logo" />></h3>
                </div>
                <div>
                    <h3><img src={require('./images/banner4.jpg')}  alt="logo" />></h3>
                </div>
            </Carousel>



            
            </div>
        )
    }
}
export default  Banner;
