import React, { Component } from 'react';

import './news.css'

class News extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="news">
                <div className="contents">
                <div className="left">
                    <div className="newtit">
                        <span><a href="#">更多>>></a></span>
                        新闻动态
                    </div>
                    <div className="newcon">
                        <ul>
                            <li><a href="#">关于.xyz域名实名认证通知</a><span>[2017/12/21 8:88:17]</span></li>
                            <li><a href="#">关于国内X3X5X10主机域名备案的说明</a><span>[2017/12/21 8:88:17]</span></li>
                            <li><a href="#">全能免费空间在线实时开通</a><span>[2017/12/21 8:88:17]</span></li>
                            <li><a href="#">关于.com/.net存量域名实名的重要通知</a><span>[2017/12/21 8:88:17]</span></li>
                            <li><a href="#">热烈祝贺“.INFO”、“.MOBI”、“.RED”、...</a><span>[2017/12/21 8:88:17]</span></li>
                        </ul>
                    </div>
                </div>


                <div className="left">
                    <div className="newtit">
                        <span><a href="#">更多>>></a></span>
                        帮助中心
                    </div>
                    <div className="newcon">
                        <ul>
                            <li><a href="#">CN域名注册说明</a><span>[2017/12/21 8:88:17]</span></li>
                            <li><a href="#">gov.cn域名注册说明</a><span>[2017/12/21 8:88:17]</span></li>
                            <li><a href="#">代理系统新闻系统的使用说明</a><span>[2017/12/21 8:88:17]</span></li>
                            <li><a href="#">升级空间的扣费计算办法</a><span>[2017/12/21 8:88:17]</span></li>
                            <li><a href="#">单位付款账户</a><span>[2017/12/21 8:88:17]</span></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default  News;
