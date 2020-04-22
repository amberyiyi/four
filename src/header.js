import React from 'react';
import "./css/header.css";
import "./css/nav.css";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Indexx from "./page/index/index.js"
import Domain from "./page/domain/domain.js"
import Host from "./page/host/host.js"
import Cloud from './page/cloud/cloud.js'
import Website from './page/website/website.js'
import Email from './page/email/email.js'
import Free from './page/free/free.js'

import User from './page/user/user.js'
import Agent from './page/agent/agent.js'
import Help from './page/help/help.js'
import Callus from './page/callus/callus.js'

import Regist from './page/regist/regist.js'
import Netpay from './page/netpay/netpay.js'
import Member from './page/member/member.js'
import Logout from './page/logout/logout.js'
import Moneylist from './page/moneylist/moneylist.js'
// host二级页面
import Hchina from "./page/host/Hchina.js"
import Hhongkong from "./page/host/Hhongkong.js"
import Hjapan from "./page/host/Hjapan.js"
import Hsina from "./page/host/Hsina.js"
import Hrussia from "./page/host/Hrussia.js"
import Husa from "./page/host/Husa.js"

//cloud二级页面
import Cchina from "./page/cloud/Cchina.js"
import Chongkong from "./page/cloud/Chongkong.js"
import Cjapan from "./page/cloud/Cjapan.js"
import Crussia from "./page/cloud/Crussia.js"

//website二级页面
import Two from "./page/website/two.js"
import Five from "./page/website/five.js"
// import { HashRouter as Router, Link, Route } from 'react-router-dom';



export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let userMessage;
        if (this.props.login) {
        userMessage = (
        <div className="hea">
            <div className="header">
                <div className="topL"><font size="2">客服热线:&nbsp;&nbsp;186 0066 0491</font></div>
                <div className="topR">
                    <Router>
                    <Link to="/user/aws">提交工单</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/help/">帮助中心</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/netpay/">付款方式</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/callus/">联系我们</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/member/">会员</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/moneylist/">余额</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/logout/">退出登录</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Router>
                </div>
            </div>
        </div>
        )
        } else {
        userMessage = (<div><Router>
        <div className="hea">
            <div className="header">
                <div className="topL"><font size="2">客服热线:&nbsp;&nbsp;186 0066 0491</font></div>
                <div className="topR">
                    
                    <Link to="/regist/">注册会员</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/user">会员登录</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/agent/">代理登录</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/help/">帮助中心</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/netpay/">付款方式</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/callus/">联系我们</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                </div>
            </div>
        </div>


        <div className="allnav">
                <div className="nav">
                    
                    <div className="logo">
                        <Link to="/"><img className="one" src={require("./img/logo.png")} /></Link>
                        <Link to="/kf"><img src={require("./img/kf.png")} /></Link>
                    </div>
                    
                    <div className="navright">
                        <ul>
                            <li>
                                <span className="nav-item">
                                    <Link to ="/">首页</Link>
                                </span>
                            </li>
                            <li id="nav-item">
                                <span className="nav-item">
                                    <Link to ="/domain">域名注册</Link>
                                </span>
                                <div className="nav-list">
                                    <div className="nav-list-item"><Link to="/domain/#english">英文域名</Link></div>
                                    <div className="nav-list-item"><Link to="/domain/#chinese">中文域名</Link></div>
                                </div>
                            </li>
                            <li id="nav-item">
                                <span className="nav-item">
                                    <Link to ="/host">虚拟主机</Link>
                                </span>
                                <div className="nav-list">
                                    <div className="nav-list-item"><Link to="/host/china">国内主机</Link></div>
                                    <div className="nav-list-item"><Link to="/host/hongkong">香港主机</Link></div>
                                    <div className="nav-list-item"><Link to="/host/japan">日本主机</Link></div>
                                    <div className="nav-list-item"><Link to="/host/sina">新加坡主机</Link></div>
                                    <div className="nav-list-item"><Link to="/host/russia">俄罗斯主机</Link></div>
                                    <div className="nav-list-item"><Link to="/host/usa">美国主机</Link></div>
                                </div>
                            </li>
                            <li id="nav-item">
                                <span className="nav-item">
                                    <Link to ="/cloud">云服务器</Link>
                                </span>
                                <div className="nav-list">
                                    <div className="nav-list-item"><Link to="/cloud/china">北京服务器</Link></div>
                                    <div className="nav-list-item"><Link to="/cloud/hongkong">香港服务器</Link></div>
                                    <div className="nav-list-item"><Link to="/cloud/japan">美国服务器</Link></div>
                                    <div className="nav-list-item"><Link to="/cloud/russia">俄罗斯服务器</Link></div>
                                </div>
                            </li>
                            <li id="nav-item">
                                <span className="nav-item">
                                    <Link to ="/website">网站建设</Link>
                                </span>
                                <div className="nav-list">
                                    <div className="nav-list-item"><Link to="/website/two">2000多套模板</Link></div>
                                    <div className="nav-list-item"><Link to="/website/five">专业建站500起</Link></div>
                                </div>
                            </li>
                            <li>
                                <span className="nav-item">
                                    <Link to ="/email">企业邮局</Link>
                                </span>
                            </li>
                            <li>
                                <span className="nav-item">
                                    <Link to ="/free" className="yellow">免费空间</Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                        
                    
                </div>
            </div>
                        <Route exact path="/" exact render={()=>(<Indexx />)}/>
                        <Route exact path="/domain" exact={true} render={()=>(<Domain />)}/>
                        <Route exact path="/host" exact={true} render={()=>(<Host />)}/>
                        <Route exact path="/cloud" exact={true} render={()=>(<Cloud />)}/>
                        <Route exact path="/website" exact={true} render={()=>(<Website />)}/>
                        <Route exact path="/email" exact={true} render={()=>(<Email />)}/>
                        <Route exact path="/free" exact={true} render={()=>(<Free />)}/>

                        <Route exact path="/regist/" exact={true} render={()=>(<Regist />)}/>
                        <Route exact path="/user"exact={true} render={()=>(<User />)}/>
                        <Route exact path="/agent/" exact={true} render={()=>(<Agent />)}/>
                        <Route exact path="/help/" exact={true} render={()=>(<Help />)}/>
                        <Route exact path="/netpay/" exact={true} render={()=>(<Netpay />)}/>
                        <Route exact path="/callus/" exact={true} render={()=>(<Callus />)}/>

                        <Route exact path="/user/aws" exact={true} render={()=>(<Help />)}/>
                        <Route exact path="/member/" exact={true} render={()=>(<Member />)}/>
                        <Route exact path="/moneylist/" exact={true} render={()=>(<Moneylist />)}/>
                        <Route exact path="/logout/" exact={true} render={()=>(<Logout />)}/>

                        {/*host二级页面*/}
                        <Route exact path="/host/china" exact={true} render={()=>(<Hchina />)}/>
                        <Route exact path="/host/hongkong" exact={true} render={()=>(<Hhongkong />)}/>
                        <Route exact path="/host/japan" exact={true} render={()=>(<Hjapan />)}/>
                        <Route exact path="/host/sina" exact={true} render={()=>(<Hsina />)}/>
                        <Route exact path="/host/russia" exact={true} render={()=>(<Hrussia />)}/>
                        <Route exact path="/host/usa" exact={true} render={()=>(<Husa />)}/>
                        
                        {/*cloud二级菜单*/}
                        <Route exact path="/cloud/china" exact={true} render={()=>(<Cchina />)}/>
                        <Route exact path="/cloud/hongkong" exact={true} render={()=>(<Chongkong />)}/>
                        <Route exact path="/cloud/japan" exact={true} render={()=>(<Cjapan />)}/>
                        <Route exact path="/cloud/russia" exact={true} render={()=>(<Crussia />)}/>
                        
                        {/*website二级页面*/}
                        <Route exact path="/website/two" exact={true} render={()=>(<Two />)}/>
                        <Route exact path="/website/five" exact={true} render={()=>(<Five />)}/>
                        
        
        
        
        
        
        </Router></div>
        )
        }
        return(
            <div>
                {userMessage}
            </div>
        )
}   }