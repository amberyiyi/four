import React from 'react';
import "./css/header.css";
import { HashRouter as Router, Link, Route } from 'react-router-dom';
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
        userMessage = (
        <div className="hea">
            <div className="header">
                <div className="topL"><font size="2">客服热线:&nbsp;&nbsp;186 0066 0491</font></div>
                <div className="topR">
                    <Router>
                    <Link to="/regist/">注册会员</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/user/">会员登录</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/agent/">代理登录</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/help/">帮助中心</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/netpay/">付款方式</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/callus/">联系我们</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Router>
                </div>
            </div>
        </div>
        )
        }
        return(
            <div>
                {userMessage}
            </div>
        )
}   }