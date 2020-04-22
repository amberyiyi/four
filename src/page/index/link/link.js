import React, { Component } from 'react';

import './link.css'

class Link extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="link">
                <div className="contents">
                    <div className="linktit">
                        友情链接
                        <div className="line"></div>
                    </div>
                    <div className="linkcon">
                        <ul>
                            <li><a href="#">新网互联</a></li>
                            <li><a href="#">Enom</a></li>
                            <li><a href="#">商务中国</a></li>
                            <li><a href="#">新网数码</a></li>
                            <li><a href="#">阿里云</a></li>
                            <li><a href="#">北京电信</a></li>
                            <li><a href="#">香港新世界</a></li>
                            <li><a href="#">Take2host</a></li>
                            <li><a href="#">DNSPOD</a></li>
                            <li><a href="#">鲁迅网</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default  Link;
