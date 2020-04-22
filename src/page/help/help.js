import React from 'react';
import './help.css';
export default class Help extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="txy">
               
               <div class="sub_about_hongtiao">
	                <div class="sub_about_hongtiao_t"><a href="/">网站首页</a> &gt; 
		                <a href="/about/lianxiwomen/">帮助中心</a>
                    </div>
                </div>

                <div class="sub_about_k">
                    <div class="sub_about_k_c"> 
                        <div class="sub_about_k_c_l"> 
                            <ul>
                                <li><a href="/about/guanyuwomen/">关于我们</a></li>
                                <li><a href="/about/dailijiameng/">代理加盟</a></li>
                                <li><a href="/netpay">付款方式</a></li>
                                <li><a href="/about/lianxiwomen/">联系我们</a></li>
                                <li><a href="/help/">帮助中心</a></li>
                            </ul>
                        </div>
                        <div class="sub_about_k_c_r"> 
                            <div class="rights">
                                <table cellspacing="0" cellpadding="0" width="665" border="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="rightsborder" valign="top">
                                            <p align="center"><br /><b>帮助中心</b><br />
                                            </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="rightsborder" valign="top">
                                            <h3><br/></h3>
                                            <table border="0" width="100%" className="txytable">
                                                <tbody>
                                                  <tr className="ttd">
                                                        <td align="center" width="25%"><a href="http://help.c361.com/domain/">
                                                        域名类</a></td>
                                                        <td align="center" width="25%"><a href="http://help.c361.com/host/">
                                                        虚拟主机类</a></td>
                                                        <td align="center" width="25%"><a href="http://help.c361.com/sql/">数据库类</a></td>
                                                        <td align="center" width="25%"><a href="http://help.c361.com/vps/">云服务器类</a></td>
                                                	</tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td class="rightsborder" valign="top">
                                            <h3><br/></h3>
                                            <table border="0" width="100%">
                                                <tbody>
                                                  <tr className="txya">
                                                        <td align="center" width="25%"><a href="http://help.c361.com/domain/">
                                                        网站类</a></td>
                                                        <td align="center" width="25%"><a href="http://help.c361.com/host/">
                                                        邮局类</a></td>
                                                        <td align="center" width="25%"><a href="http://help.c361.com/sql/">财务类</a></td>
                                                        <td align="center" width="25%"><a href="http://help.c361.com/vps/">备案专题类</a></td>
                                                	</tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>

                                    <tr>
                                    <td class="rightsborder" valign="top"> 
                                        <h3>
                                            <br />
                                            <div class="waibiankuang">
                                               
                                                    <input type="text" class="txt11" value=" 在这里搜索" ></input>
                                                    <button class="search">搜索</button>
                             
                                            </div>
                                        </h3>
                                    </td>
                                    </tr>

                                        


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>

            </div>
        )
}   }