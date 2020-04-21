import React from 'react';
import '../css/otherpro.css'
export default class FSQ extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
        <div className='list-content'>
            <br/>
            <br/>
        <form name="reguserform" method="post" action="register-sub.asp">
        <table width="100%" border="0" cellspacing="1" bgcolor="#CCCCCC">
        <tbody><tr>
            <td width="9%" height="30" rowspan="2" bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="#E6F4F9">
            <tbody><tr>
                <td width="377" height="31" align="right" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　用户名：</font></div></td>
                <td width="101" bgcolor="#FAFAF5">
                   <input name="username" type="text" id="username" size="14" maxlength="14" style={{marginLeft:'18%'}} onblur="checkusername(this.value)" onfocus="Iusername()"/>
        </td>
                <td width="951" bgcolor="#FAFAF5"><div id="divusername"></div></td>
            </tr>
            <tr>
                <td width="377" height="32" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　密码：</font></div></td>
                <td bgcolor="#FAFAF5">

                    <input style={{marginLeft:'18%'}} name="password" type="password" size="14" maxlength="50" onblur="checkpassword(this.value)" onfocus="Ipassword()"/>
        </td>
                <td bgcolor="#FAFAF5"><div id="divpassword"></div></td>
            </tr>
            <tr>
                <td width="377" height="32" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　重复密码：</font></div></td>
                <td bgcolor="#FAFAF5">
                    <input style={{marginLeft:'18%'}} name="repassword" type="password" id="repassword" size="14" maxlength="50" onblur="checkrepassword(this.value)" onfocus="Irepassword()"/>
        </td>
                <td bgcolor="#FAFAF5"><div id="divrepassword"></div></td>
            </tr>
            <tr>
                <td width="377" height="32" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　Email：</font></div></td>
                <td height="13" colspan="2" bgcolor="#FAFAF5">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody><tr>
            <td width="50">           
             <input name="email" type="text" onblur="checkemail(this.value)" onfocus="Iemail()"/></td>
            <td><div id="divemail"></div></td>
        </tr>
        </tbody></table>

        </td>
            </tr>
            <tr>
                <td width="377" height="28" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　姓名(或企业名称)：</font></div></td>
                <td colspan="2" bgcolor="#FAFAF5">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody><tr>
            <td width="50">            
            <input name="truename" type="text" maxlength="25" onblur="checktruename(this.value)" onfocus="Itruename()"/>
            </td>
            <td><div id="divtruename"></div></td>
        </tr>
        </tbody></table>          
</td>
      </tr>

      <tr>
        <td width="377" height="28" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　所属业务专员：</font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">
            <div align="left" style={{marginLeft:'2%'}}>
              <select name="kefunow">
                <option selected="">请选择: </option>
				
                <option value="QQ客服（68819330）">QQ客服（68819330）</option>
				
                <option value="在线客服（361）">在线客服（361）</option>
				
                <option value="在线客服（363）">在线客服（363）</option>
				
                <option value="QQ客服(4202937)">QQ客服(4202937)</option>
				
                <option value="旺旺">旺旺</option>
				
                <option value="在线客服（362）">在线客服（362）</option>

              </select>
              将为您提供售后服务</div></td>
      </tr>

      <tr>
        <td width="377" height="27" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　国家：</font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">
            <div align="left" style={{marginLeft:'2%'}}>
              <input name="coun" type="text" id="coun" value="中国" size="6"/>
              </div></td>
      </tr>
      <tr>
        <td width="377" height="28" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　省份：</font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">
            <div align="left" style={{marginLeft:'2%'}}>
              <select name="prv">
                <option selected="" value="">请选择: </option>
                <option value="北京">北京</option>
                <option value="广东">广东</option>
                <option value="上海">上海</option>
                <option value="广西">广西</option>
                <option value="天津">天津</option>
                <option value="重庆">重庆</option>
                <option value="河北">河北</option>
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
              </div></td>
      </tr>
      <tr>
        <td width="377" height="25" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　城市：</font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="50">            
    <input name="city" size="10" type="text" maxlength="25" onblur="checkcity(this.value)" onfocus="Icity()"/>
    </td>
    <td><div id="divcity"></div></td>
  </tr>
</tbody></table>          
 
</td>
      </tr>
      <tr>
        <td width="377" height="30" bgcolor="#F5F5F5">
            <div align="left"><font color="#000000">　地址：</font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="50">           
     <input name="address" size="30" type="text" maxlength="50" onblur="checkaddress(this.value)" onfocus="Iaddress()"/>
     </td>
    <td><div id="divaddress"></div></td>
  </tr>
</tbody></table> 


</td>
      </tr>
      <tr>
        <td width="377" height="30" bgcolor="#F5F5F5">
            <div align="left"><font color="#000000">　联系人：</font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="50">            
    <input name="contact" type="text" size="20" maxlength="20" onblur="checkcontact(this.value)" onfocus="Icontact()"/>
    </td>
    <td><div id="divcontact"></div></td>
  </tr>
</tbody></table>

</td>
      </tr>	  
      <tr>
        <td width="377" height="31" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　邮政编码： </font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="50">            
    <input name="postid" type="text" size="8" maxlength="10" onblur="checkpostid(this.value)" onfocus="Ipostid()"/>
    </td>
    <td><div id="divpostid"></div></td>
  </tr>
</tbody></table>


</td>
      </tr>
	  
      <tr>
        <td width="377" height="31" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　身份证号码(或营业执照)： </font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="50">            
    <input name="perid" type="text" size="18" maxlength="40" onblur="checkperid(this.value)" onfocus="Iperid()"/>
    </td>
    <td><div id="divperid"></div></td>
  </tr>
</tbody></table>
</td>
      </tr>

      <tr>
        <td width="377" height="31" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　联系固话：</font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="50">            
    <input name="tel" type="text" size="20" maxlength="50" onblur="checktel(this.value)" onfocus="Itel()"/></td>
    <td><div id="divtel"></div></td>
  </tr>
</tbody></table>


</td>
      </tr>

      <tr>
        <td width="377" height="32" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　图形</font>验证码：</div></td>
        <td colspan="3" bgcolor="#FAFAF5">
            <div align="left" style={{marginLeft:'2%'}}>
              <input name="vcode" type="text" id="vcode" size="4" maxlength="10"/>
              <img src="/style/info/vcode.asp" width="40" height="10" id="vcodeimg" name="vcodeimg"/>　
              <a href="#" onclick="document.getElementById('vcodeimg').src='/style/info/vcode.asp?id='+Math.random();return false;">刷新验证码</a></div></td>
      </tr>
      <tr>
        <td width="377" height="31" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　联系手机：</font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="50">           
     <input name="mobi" id="mobi" type="text" size="20" maxlength="50" onblur="checkmobi(this.value)" onfocus="Imobi()"/></td>
    <td><div id="divmobi"></div></td>
  </tr>
</tbody></table>
</td>


      </tr>	  

      <tr>
        <td width="377" height="34" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　传　　真：</font></div></td>
        <td colspan="3" bgcolor="#FAFAF5">


<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="50">            
    <input name="fax" type="text" size="20" maxlength="50" onblur="checkfax(this.value)" onfocus="Ifax()"/></td>
    <td><div id="divfax"></div></td>
  </tr>
</tbody></table>
</td>
        </tr>
		
      <tr>
        <td width="377" height="32" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　</font>QQ号码： </div></td>
        <td colspan="3" bgcolor="#FAFAF5">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="50">            
    <input name="qq" type="text" size="20" maxlength="50" onblur="checkqq(this.value)" onfocus="Iqq()"/>
    </td>
    <td><div id="divqq"></div></td>
  </tr>
</tbody></table>
</td>
      </tr>
      <tr>
        <td height="32" bgcolor="#F5F5F5"><div align="left"><font color="#000000">　</font>同意条款：</div></td>
        <td colspan="3" bgcolor="#FAFAF5"><div align="left">            
        <input id="tiaokuan" value="y" checked="" type="checkbox" name="tiaokuan"/>
            <a href="register3.asp" target="_blank">我已阅读，理解并接受会员注册条款</a></div></td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td width="377" height="34">　　　          
          <div align="left"></div></td>
        <td colspan="3">
            <div align="left">
              <input type="submit" name="Submit" value="提交"/>
              </div></td>
      </tr>
    </tbody></table>    </td>
  </tr>
</tbody></table>
</form>
            
            </div>
        )
    }
 
}