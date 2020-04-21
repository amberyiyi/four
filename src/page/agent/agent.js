import React from 'react';
import Footer from '../../footer'
// import style from "./agent.css"
import imgURL from './image/bd_bg.jpg';

export default class Agent extends React.Component{
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
	                <div className="sub_hongtiao_t"><a href="/">网站首页</a> &gt; <a href="/user/">代理登录</a></div>
                </div>

<div className="sub_mem_k">
<div className="sub_mem_tk_c">
<table width="420" border="0" align="center"  height="232">
  <tbody>                                                     

          <tr>
                 <td width="80" height="40" align="right">代理名称：</td>
            <td align="left">
                <input   name="username" className="reginput" />
            </td>
       </tr>
      <tr>
        <td height="40" align="right">代理密码：</td>
        <td align="left"><input  type="password" size="15" name="password" className="reginput" /></td>
      </tr>
      <tr>
        <td height="40" align="right">验&nbsp;证&nbsp;码：</td>
        <td align="left">
            {/*<input name="vcode" type="text" id="vcode"  style="width:80px; height:40px; line-height:40px; text-align:center; border:1px solid #ccc;" /> 
        <img src={require("./image/1.jpg")} style="vertical-align:middle;cursor:pointer;width:80px" />*/}
         </td>
      </tr>
       
              <tr> 
                  <td></td>
                  <td>     
                  <input name="submitLogin" type="image" src="https://www.c361.com/c361/images/login_bt.jpg" width="260" height="50" />
   
        </td>
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


 </div>
</div>
                
            </div>
        )
}   }
