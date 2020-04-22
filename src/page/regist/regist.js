import 'antd/dist/antd.css';
import './css/regist.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom';
import { Breadcrumb ,Menu } from 'antd';
const { SubMenu } = Menu;
import FSQ from './page/otherpro.js'
import DNS from './page/dns.js'
import VPN from './page/vpn.js'
import DB from './page/db.js'
import CLOUD from './page/cloud.js'
import SAFE from './page/safe.js'
import PRICE from './page/price.js'
import MSG from './page/msg.js'
import CHANGE from './page/changemsg.js'
import MONEY from './page/monetary.js'
import RECEIPT from './page/receipt.js'
export default class regist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            theme: '#0068c1',
            current: '1',
        };
    }
    
    render(){  
        return(
            <div>
                <div className='banner-box'>
                <br />
                   中华世纪网 <br />
                   专业IDC服务商
                </div>
                <Breadcrumb separator=">" className="nav-box" style={{color:"white"}}>
                    <Breadcrumb.Item style={{color:"white"}}>当前位置：</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" style={{color:"white"}}>&nbsp;网站首页&nbsp; </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" style={{color:"white"}}>&nbsp;会员中心&nbsp; </Breadcrumb.Item>
                    <Breadcrumb.Item style={{color:"white"}}>其他产品</Breadcrumb.Item>
                </Breadcrumb>
                <Router>
                <div className="list-box"> 
                    <div className="list-first">
                        <Menu
                        defaultOpenKeys={['sub1','sub2']}
                        selectedKeys={[this.state.current]}
                        mode="inline"
                        >
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <span>产品管理</span>
                            </span>
                            }
                            style={{background: "#0068c1",color:'white',fontSize:24+'px'}}
                        >
                            
                            <Menu.Item key="1"><Link to="/regist/dns">域名管理</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/regist/vpn">虚拟主机管理</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/regist/db">数据库管理</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/regist/cloud">云主机管理</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/regist/safe">企业安全云管理</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/regist/other">其他产品管理</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/regist/price">价格预览</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                <span>用户资料</span>
                            </span>
                            }
                            style={{background: "#0068c1",color:'white',fontSize:24+'px'}}
                        >
                            <Menu.Item key="8"><Link to="/regist/msg">我的信息</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/regist/change">修改资料</Link></Menu.Item>
                            <Menu.Item key="10"><Link to="/regist/money">财务记录</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/regist/receipt">发票申请</Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/regist">安全退出</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                            <span>
                                <span>购买产品</span>
                            </span>
                            }
                            style={{background: "#0068c1",color:'white',fontSize:24+'px'}}
                        >
                            <Menu.Item key="13"><Link to="/domain">域名注册</Link></Menu.Item>
                            <Menu.Item key="14"><Link to="/host">开通虚拟主机</Link></Menu.Item>
                            <Menu.Item key="15"><Link to="/cloud">购买云服务器</Link></Menu.Item>
                            <Menu.Item key="1"><Link to="/regist/">域名管理</Link></Menu.Item>
                        </SubMenu>
                        </Menu>    
                    </div>
                    <div className='list-second'> 
                    <Switch>
                        <Route path="/regist/" exact render={()=>(<FSQ />)}/> 
                        <Route path="/regist/dns" render={()=>(<DNS />)}/> 
                        <Route path="/regist/vpn" render={()=>(<VPN />)}/> 
                        <Route path="/regist/db" render={()=>(<DB />)}/> 
                        <Route path="/regist/cloud" render={()=>(<CLOUD />)}/> 
                        <Route path="/regist/safe" render={()=>(<SAFE />)}/>
                        <Route path="/regist/other" render={()=>(<SAFE />)}/> 
                        <Route path="/regist/price" render={()=>(<PRICE />)}/> 
                        <Route path="/regist/msg" render={()=>(<MSG />)}/> 
                        <Route path="/regist/change" render={()=>(<CHANGE />)}/> 
                        <Route path="/regist/money" render={()=>(<MONEY />)}/>
                        <Route path="/regist/receipt" render={()=>(<RECEIPT />)}/>  
                    </Switch> 
                    </div>  
                </div>       
                </Router>
    </div>
        )
}   

}