import React, { Component } from 'react';

import './adg.css'

class Adg extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
        }
    }
    render() {
        return (
            <div className="adg">
                <div className="tit">
                    <h3>选择中华世纪网的优势</h3>
                    <p>中华世界网15年网络运维经验，提供全年24小时无休技术在线支持服务</p>
                </div>
                <div className="contents">
                    <div className="con">
                        <div className="pic"><img src={require("./images/ys1.png")} /></div>
                        <span>云计算技术</span><br />
                        <q>
                            企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全
                        </q>
                    </div>
                    <div className="con">
                        <div className="pic"><img src={require("./images/ys2.png")} /></div>
                        <span>云计算技术</span><br />
                        <q>
                            企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全
                        </q>
                    </div>
                    <div className="con">
                        <div className="pic"><img src={require("./images/ys3.png")} /></div>
                        <span>云计算技术</span><br />
                        <q>
                            企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全
                        </q>
                    </div>
                    <div className="con">
                        <div className="pic"><img src={require("./images/ys4.png")} /></div>
                        <span>云计算技术</span><br />
                        <q>
                            企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全
                        </q>
                    </div>
                    <div className="con">
                        <div className="pic"><img src={require("./images/ys5.png")} /></div>
                        <span>云计算技术</span><br />
                        <q>
                            企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全
                        </q>
                    </div>
                    <div className="con">
                        <div className="pic"><img src={require("./images/ys6.png")} /></div>
                        <span>云计算技术</span><br />
                        <q>
                            企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全
                        </q>
                    </div>
                </div>
            </div>
        )
    }
}
export default  Adg;
