import React from 'react';
import '../css/receipt.css'
export default class CHANGE extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className='receipt-content'>
                <br />
                <br />
            <form name="form1" method="post">
            <table width="100%" border="0" cellspacing="1" bgcolor="#CCCCCC">
                <tbody><tr>
                <td width="9%" height="30" rowspan="2" bgcolor="#FFFFFF" >
                
                
                
                <table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="#E6F4F9" style={{border:"solid 1px grey"}}>
                <tbody><tr>
                                <td width="34%" height="31" bgcolor="#F5F5F5"><font color="#000000">　　　用户名：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　　fqt123
                                <input name="username" type="hidden" value="fqt123" />
                        <input name="password" type="hidden" id="password" value="f6e442f6a6fdef1ca3f088052371c85e" /></td>
                </tr>
                            <tr>
                                <td height="28" bgcolor="#F5F5F5"><font color="#000000">　　　重设新密码：</font></td>
                                <td width="26%" bgcolor="#FAFAF5">　
                                <input name="newpassword" type="password" id="newpassword" size="14" maxlength="50" /></td>
                                <td width="16%" bgcolor="#FAFAF5">重复新密码<font color="#000000">：</font></td>
                                <td width="24%" bgcolor="#FAFAF5">　
                                <input name="renewpassword" type="password" id="renewpassword" size="14" maxlength="50" /></td>
                </tr>
                            <tr>
                                <td height="26" bgcolor="#F5F5F5"><font color="#000000">　　　Email：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　
                                <input name="email" type="text" id="email" value="891604091@qq.com" /></td>
                </tr>
                            <tr>
                                <td height="28" bgcolor="#F5F5F5"><font color="#000000">　　　姓名(或企业名称)：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">
                                　
                                <input name="truename" type="text" id="truename" value="范涛涛" /></td>
                </tr>
                
                            <tr>
                                <td height="28" bgcolor="#F5F5F5"><font color="#000000">　　　所属业务专员：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">
                                　
                                QQ客服(4202937)　　如果不满意当前的客服人员可以更换： <select name="kefunow">
                            <option selected="">请选择: </option>
                            
                            <option value="旺旺">旺旺</option>
                            
                            <option value="在线客服（363）">在线客服（363）</option>
                            
                            <option value="在线客服（362）">在线客服（362）</option>
                            
                            <option value="在线客服（361）">在线客服（361）</option>
                            
                            <option value="QQ客服（68819330）">QQ客服（68819330）</option>
                            
                            <option value="QQ客服(4202937)">QQ客服(4202937)</option>

                        </select>更换原因：<input name="changekefufor" type="text" size="25" />(25个汉字内)</td>
                </tr>
                
                            <tr>
                                <td height="27" bgcolor="#F5F5F5"><font color="#000000">　　　国家：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　
                                <input name="coun" type="text" id="coun" value="中国" size="10" />　</td>
                </tr>
                            <tr>
                                <td height="28" bgcolor="#F5F5F5"><font color="#000000">　　　省份：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">
                                
                                
                                　
                                <select name="prv">
                            <option value="">请选择: </option>
                            <option value="北京">北京</option>
                            <option value="广东">广东</option>
                            <option value="上海">上海</option>
                            <option value="广西">广西</option>
                            <option value="天津">天津</option>
                            <option value="重庆">重庆</option>
                            <option value="河北" selected="">河北</option>
                            <option value="河南">河南</option>
                            <option value="黑龙江">黑龙江</option>
                            <option value="吉林">吉林</option>
                            <option value="辽宁">辽宁</option>
                            <option value="内蒙古">内蒙古</option>
                            <option value="海南">海南</option>
                            <option value="山西">山西</option>
                            <option value="陕西">陕西</option>
                            <option value="山东">山东</option>
                            <option value="江苏">江苏</option>
                            <option value="浙江">浙江</option>
                            <option value="安徽">安徽</option>
                            <option value="江西">江西</option>
                            <option value="福建">福建</option>
                            <option value="甘肃">甘肃</option>
                            <option value="宁夏">宁夏</option>
                            <option value="青海">青海</option>
                            <option value="新疆">新疆</option>
                            <option value="湖北">湖北</option>
                            <option value="湖南">湖南</option>
                            <option value="四川">四川</option>
                            <option value="贵州">贵州</option>
                            <option value="云南">云南</option>
                            <option value="西藏">西藏</option>
                            <option value="香港">香港</option>
                            <option value="澳门">澳门</option>
                            <option value="台湾">台湾</option>
                            <option value="其它">其它</option>
                        </select>
                        </td>
                            </tr>
                            <tr>
                                <td height="25" bgcolor="#F5F5F5"><font color="#000000">　　　城市：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　
                                <input name="city" type="text" id="city" value="秦皇岛" size="10" /></td>
                </tr>
                            <tr>
                                <td height="30" bgcolor="#F5F5F5"><font color="#000000">　　　地址：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　
                                <input name="address" type="text" id="address" value="海港区白塔岭360号" size="40" maxlength="50" /></td>
                </tr>
                
            <tr>
                                <td height="30" bgcolor="#F5F5F5"><font color="#000000">　　　联系人：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　
                                <input name="contact" type="text" id="contact" value="是快乐的风景" size="20" maxlength="20" /></td>
                </tr>	
                            <tr>
                                <td height="31" bgcolor="#F5F5F5"><font color="#000000">　　　邮政编码： </font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　
                                <input name="postid" type="text" id="postid" value="075416" size="10" maxlength="10" /></td>
                </tr>
                            <tr>
                                <td height="31" bgcolor="#F5F5F5"><font color="#000000">　　　身份证号码(或营业执照)： </font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　
                                <input name="perid" type="text" id="postid" value="12345678912" size="19" maxlength="40" />
                                <strong> </strong>
                                </td>
                            </tr>
                                <tr>
                                <td height="31" bgcolor="#F5F5F5"><font color="#000000">　　　联系固定电话：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　
                                <input name="tel" type="text" id="tel" value="6825200" size="20" maxlength="50" /></td>
                </tr>
                <tr>
                                <td height="31" bgcolor="#F5F5F5"><font color="#000000">　　　联系手机：</font></td>
                                <td colspan="3" bgcolor="#FAFAF5">　
                                <input name="mobi" type="text" id="mobi" value="13473327245" size="20" maxlength="50" /></td>
                </tr>
                            <tr>
                                <td height="34" bgcolor="#F5F5F5"><font color="#000000"> 　　　传　　真：</font></td>
                                <td bgcolor="#FAFAF5">　
                                <input name="fax" type="text" id="fax" value="13473327245" size="20" maxlength="50"/>  </td>
                                <td bgcolor="#FAFAF5"> QQ<font color="#000000">：</font> 　</td>
                                <td bgcolor="#FAFAF5">　
                                <input name="qq" type="text" id="qq" value="89160409" size="20" maxlength="50"/></td>
                </tr>

                            <tr bgcolor="#FFFFFF">
                                <td height="34">　　　
                                <input type="submit" name="Submit" value="提交" /></td>
                                <td colspan="3">&nbsp;</td>
                            </tr>
                    </tbody>
                    </table>  
                
                
                
                
                
                </td>
                </tr>
            </tbody>
            </table>
            </form>
            </div>
        )
    }

}