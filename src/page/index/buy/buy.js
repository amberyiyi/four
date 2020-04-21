import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './buy.css'

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
             currentIndex: 0
        }
    }
    handleClick(e){
        let tag = e.target;
            let index = parseInt(tag.getAttribute('index'))
            this.setState({
                currentIndex: index
            })
    }
    render() {
        return (
            <div className="buy"><h3>中华世界网主推产品</h3>
                <Router>
                <div className="contents">
                    <div className="ctop">
                        <ul>
                            <li onMouseOver={(e)=>this.handleClick(e)} className={this.state.currentIndex === 0 ? 'liactive' : ''}><Link  index={0} to='/' >企业云服务器</Link></li>
                            <li onMouseOver={(e)=>this.handleClick(e)} className={this.state.currentIndex === 1 ? 'liactive' : ''}><Link index={1} to='/two/' >云服务器</Link></li>
                            <li onMouseOver={(e)=>this.handleClick(e)} className={this.state.currentIndex === 2 ? 'liactive' : ''}><Link index={2} to='/three/' >云虚拟机</Link></li>
                        </ul>
                    </div>
                        <Route path='/' exact component={Firstperson} />
                        <Route path='/two/' component={Two} />
                        <Route path='/three/' component={Three} />
                </div>
            </Router>
            </div>
        )
    }
}
export default  Buy;


export class Firstperson extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="one">
               <div className="contents">
                   <div className="list">
                       <div className="list_c">
                           <dl>
                               <dt>百度云香港服务</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
                   <div className="list">
                       <div className="list_c">
                           <dl>
                               <dt>香港企业云</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
                   <div className="list">
                       <div className="list_c">
                           <dl>
                               <dt>国内企业云</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
                   <div className="list">
                       <div className="list_c">
                           <dl>
                               <dt>百度云</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}


export class Two extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="one">
               <div className="contents">
                   <div className="list">
                       <div className="list_c list_r">
                           <dl>
                               <dt>百度云香港服务</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
                   <div className="list">
                       <div className="list_c list_r">
                           <dl>
                               <dt>香港企业云</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
                   <div className="list">
                       <div className="list_c list_r">
                           <dl>
                               <dt>国内企业云</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
                   <div className="list">
                       <div className="list_c list_r">
                           <dl>
                               <dt>百度云</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}




export class Three extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="one">
               <div className="contents">
                   <div className="list">
                       <div className="list_c list_b">
                           <dl>
                               <dt>香港迷你</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
                   <div className="list">
                       <div className="list_c list_b">
                           <dl>
                               <dt>香港X3</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
                   <div className="list">
                       <div className="list_c list_b">
                           <dl>
                               <dt>香港X5</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
                   <div className="list">
                       <div className="list_c list_b">
                           <dl>
                               <dt>香港X10</dt>
                               <dd>CPU:1核/内存：1G</dd>
                               <dd>硬盘：40+20G/带宽：1M</dd>
                               <dd>IP个数：独立IP1个</dd>
                               <dd>系统：Win2008、2012</dd>
                               <dd>百度香港机房</dd>
                               <dd><a href="#">提高配置的说明</a></dd>
                               <dd>
                                   <span className="fu">原价月付：</span>
                                   <span className="yuan"><del>158</del></span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">月付：</span>
                                   <span className="yuan">140</span>
                                   <span className="fu">元</span>
                               </dd>
                               <dd>
                                   <span className="fu">年付：</span>
                                   <span className="yuan">1400</span>
                                   <span className="fu">元</span>
                               </dd>
                           </dl>
                       </div>
                       <div className="butt">
                           <a href="#">立即订购</a>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
