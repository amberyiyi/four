import React from 'react';
import Footer from '../../footer'
import style from "./user.css"

export default class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="sub_about_banner">
                                        <div className="sub_about_tit">中华世纪网<br />专业IDC顶级服务商</div>
                </div>
                <div className="sub_hongtiao">
	                <div className="sub_hongtiao_t"><a href="/">网站首页</a> &gt; <a href="/user/">会员登录</a></div>
                </div>

<div className="sub_mem_k">
<div className="sub_mem_tk_c">
<table width="420" border="0" align="center"  height="232">
  <tbody>                                                     

          <tr>
                 <td width="80" height="40" align="right">会员名称：</td>
            <td align="left">
                <input   name="username" className="reginput" />
            </td>
       </tr>
      <tr>
        <td height="40" align="right">会员密码：</td>
        <td align="left"><input  type="password" size="15" name="password" className="reginput" /></td>
      </tr>
      <tr>
        <td height="26" align="right">　</td>
        <td align="left"><input name="submitLogin" type="submit" value="登录" className="user" /></td>
      </tr>
      <tr>
        <td height="26" align="right">
            <input id="id_memery_info" type="checkbox" value="y" name="timeout" />
        </td>
        <td align="left">
            <label id="label_memery_info" >45分钟超时</label>&nbsp;&nbsp;&nbsp;&nbsp;
           忘记密码/找回密码
            </td>
      </tr>
    
  </tbody>
</table>

    <p align="center">
                    <a href="#">
                        <img src={require("./image/fastlogin.png")} width="217" height="32" border="0" /></a>
<br />
                    <a href="#">
                        <img src={require("./image/fastloginqq.gif")} width="198" height="60" border="0" /></a>


    </p>
    </div>
</div>
                
            </div>
        )
}   }
