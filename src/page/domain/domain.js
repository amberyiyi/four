import React from 'react';
import '../domain/css/domain.css'
import keys from './img/keys.png'
import ym1 from './img/ym1.gif'
import ym2 from './img/ym2.gif'
import ym3 from './img/ym3.gif'
import ym4 from './img/ym4.gif'
import ym5 from './img/ym5.gif'
import ym6 from './img/ym6.gif'
import search from './img/domain_search2.jpg'
export default class Domain extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <div className="cont">
            <div className="sub_yuming_banner">
              <br/>
            </div>
            <div className="sub_yuming_tit"  align="center">
              <img border="0" src={keys} />
            </div> 
            <form name="form1" method="get" >
              <table width="1200" border="0" cellspacing="0" cellpadding="0" className="ta1">
                  <tbody>
                    <tr><td width="160" height="60" align="left">
                    <div className="w1">WWW.</div></td>
                    <td width="900" align="left"><input name="domain" type="text" id="domain"  value="请输入你想要注册的域名，如c361"  className="w2"/></td>
                    <td width="140" align="left"><input type="image" src={search} align="absmiddle"/></td>
                </tr>
            </tbody></table>
            <table width="1200" border="0" cellspacing="0" cellpadding="0">
              <tbody><tr>
                <td width="120" height="30" align="left"></td>
                <td width="120" align="left"><input name="top" type="checkbox" value="yes" checked="checked"/> .top</td>
                <td width="120" align="left"><input name="com" type="checkbox" value="yes" checked=""/> .com</td>
                <td width="120" align="left"><input name="net" type="checkbox" value="yes" checked="checked"/> .net</td>
                <td width="120" align="left"><input name="中国" type="checkbox" value="yes" checked="checked"/> .tu</td>
                <td width="120" align="left"><input name="cn" type="checkbox" value="yes" checked="checked"/> .cn</td>
                <td width="120" align="left"><input name="公司" type="checkbox" value="yes"/> .ak</td>
                <td width="120" align="left"><input name="hk" type="checkbox" value="yes"/> .hk</td>
                <td width="120" align="left"><input name="biz2" type="checkbox" value="yes"/> .biz</td>
                <td width="120" align="left"><input name="tv" type="checkbox" value="yes"/> .tv</td>
                <td width="120" align="left"></td>
            </tr>
            <tr>
                <td width="120" height="30" align="left"></td>
                <td width="120" align="left"><input name="top" type="checkbox" value="yes" checked="checked"/> .top</td>
                <td width="120" align="left"><input name="com" type="checkbox" value="yes" checked=""/> .com</td>
                <td width="120" align="left"><input name="net" type="checkbox" value="yes" checked="checked"/> .net</td>
                <td width="120" align="left"><input name="中国" type="checkbox" value="yes" checked="checked"/> .ch</td>
                <td width="120" align="left"><input name="cn" type="checkbox" value="yes" checked="checked"/> .cn</td>
                <td width="120" align="left"><input name="公司" type="checkbox" value="yes"/> .pin</td>
                <td width="120" align="left"><input name="hk" type="checkbox" value="yes"/> .hk</td>
                <td width="120" align="left"><input name="biz2" type="checkbox" value="yes"/> .biz</td>
                <td width="120" align="left"><input name="tv" type="checkbox" value="yes"/> .tv</td>
                <td width="120" align="left"></td>
            </tr>
            <tr>
                <td width="120" height="30" align="left"></td>
                <td width="120" align="left"><input name="top" type="checkbox" value="yes" checked="checked"/> .top</td>
                <td width="120" align="left"><input name="com" type="checkbox" value="yes" checked=""/> .com</td>
                <td width="120" align="left"><input name="net" type="checkbox" value="yes" checked="checked"/> .net</td>
                <td width="120" align="left"><input name="中国" type="checkbox" value="yes" checked="checked"/> .cc</td>
                <td width="120" align="left"><input name="cn" type="checkbox" value="yes" checked="checked"/> .cn</td>
                <td width="120" align="left"><input name="公司" type="checkbox" value="yes"/> .pin</td>
                <td width="120" align="left"><input name="hk" type="checkbox" value="yes"/> .hk</td>
                <td width="120" align="left"><input name="biz2" type="checkbox" value="yes"/> .biz</td>
                <td width="120" align="left"><input name="tv" type="checkbox" value="yes"/> .tv</td>
                <td width="120" align="left"></td>
            </tr>
            <tr>
                <td width="120" height="30" align="left"></td>
                <td width="120" align="left"><input name="top" type="checkbox" value="yes" checked="checked"/> .aj</td>
                <td width="120" align="left"><input name="com" type="checkbox" value="yes" checked=""/> .com</td>
                <td width="120" align="left"><input name="net" type="checkbox" value="yes" checked="checked"/> .cyt</td>
                <td width="120" align="left"><input name="中国" type="checkbox" value="yes" checked="checked"/> .ha</td>
                <td width="120" align="left"><input name="cn" type="checkbox" value="yes" checked="checked"/> .cn</td>
                <td width="120" align="left"><input name="公司" type="checkbox" value="yes"/> .zs</td>
                <td width="120" align="left"><input name="hk" type="checkbox" value="yes"/> .hk</td>
                <td width="120" align="left"><input name="biz2" type="checkbox" value="yes"/> .kd</td>
                <td width="120" align="left"><input name="tv" type="checkbox" value="yes"/> .cu</td>
                <td width="120" align="left"></td>
            </tr>
            <tr>
                <td width="120" height="30" align="left"></td>
                <td width="120" align="left"><input name="top" type="checkbox" value="yes" checked="checked"/> .top</td>
                <td width="120" align="left"><input name="com" type="checkbox" value="yes" checked=""/> .com</td>
                <td width="120" align="left"><input name="net" type="checkbox" value="yes" checked="checked"/> .net</td>
                
                <td width="120" align="left"><input name="hk" type="checkbox" value="yes"/> .hk</td>
                <td width="120" align="left"><input name="biz2" type="checkbox" value="yes"/> .biz</td>
                <td width="120" align="left"><input name="tv" type="checkbox" value="yes"/> .tv</td>
                <td width="120" align="left"></td>
            </tr>
              <tr>
                <td height="30" align="left"></td>
                <td align="left"><input name="cc" type="checkbox" value="yes"/> .cc</td>
                <td align="left">
                <input name="freehosttype" type="hidden" id="freehosttype" value="2"/>
                <input name="type_encode" type="hidden" id="type_encode" value="1"/>
                <input name="tw" type="checkbox" value="yes"/> .tw</td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
            </tr>
          </tbody></table>
            </form>
            <div className="sub_yuming_tit" id="zhongwen">中文域名查询注册</div>
            <form name="form1" method="get" >
              <table width="1200" border="0" cellspacing="0" cellpadding="0" className="ta1">
                  <tbody>
                    <tr><td width="160" height="60" align="left">
                    <div className="w1">WWW.</div></td>
                    <td width="900" align="left"><input name="domain" type="text" id="domain"  value="请输入你想要注册的域名，如c361"  className="w2"/></td>
                    <td width="140" align="left"><input type="image" src={search} align="absmiddle"/></td>
                </tr>
            </tbody></table>
            <table width="1200" border="0" cellspacing="0" cellpadding="0">
              <tbody><tr>
                <td width="120" height="30" align="left"></td>
                <td width="120" align="left"><input name="top" type="checkbox" value="yes" checked="checked"/> .top</td>
                <td width="120" align="left"><input name="com" type="checkbox" value="yes" checked=""/> .com</td>
                <td width="120" align="left"><input name="net" type="checkbox" value="yes" checked="checked"/> .net</td>
                <td width="120" align="left"><input name="中国" type="checkbox" value="yes" checked="checked"/> .中国</td>
                <td width="120" align="left"><input name="cn" type="checkbox" value="yes" checked="checked"/> .cn</td>
                <td width="120" align="left"><input name="公司" type="checkbox" value="yes"/> .公司</td>
                <td width="120" align="left"><input name="hk" type="checkbox" value="yes"/> .hk</td>
                <td width="120" align="left"><input name="biz2" type="checkbox" value="yes"/> .biz</td>
                <td width="120" align="left"><input name="tv" type="checkbox" value="yes"/> .tv</td>
                <td width="120" align="left"></td>
            </tr>
              <tr>
                <td height="30" align="left"></td>
                <td align="left"><input name="cc" type="checkbox" value="yes"/> .cc</td>
                <td align="left">
                <input name="freehosttype" type="hidden" id="freehosttype" value="2"/>
                <input name="type_encode" type="hidden" id="type_encode" value="1"/>
                <input name="tw" type="checkbox" value="yes"/> .tw</td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
            </tr>
          </tbody></table>
            </form>
            <div class="sub_yuming_price_c">
                <div class="sub_yuming_tit">域名价格表查询</div>
                <div class="sub_yuming_con">
                  <table width="1200" border="0" cellpadding="0" cellspacing="1" bgcolor="#CCCCCC">
                      <tbody><tr>
                        <td width="300" height="50" align="center" bgcolor="#EFEEF2"><div className="yu1">域名类别</div></td>
                        <td width="500" align="center" bgcolor="#EFEEF2"><div >域名描述</div></td>
                        <td width="100" align="center" bgcolor="#EFEEF2"><div className="yu1">首年价格</div></td>
                        <td width="100" align="center" bgcolor="#EFEEF2"><div className="yu1">域名续费</div></td>
                        <td width="100" align="center" bgcolor="#EFEEF2"><div className="yu1">转入价格</div></td>
                      </tr>
                      <tr>
                        <td height="80" align="center" bgcolor="#EFEEF2" rowspan="3">国际英文域名</td>
                        <td align="center" bgcolor="#FFFF00" height="40">.com最受欢迎的域名</td>
                        <td align="center" bgcolor="#FFFF00"><b><font color="#FF0000">45元</font></b></td>
                        <td align="center" bgcolor="#FFFF00">75元/年</td>
                        <td align="center" bgcolor="#FFFF00">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.net</td>
                        <td align="center" bgcolor="#EFEEF2">80元</td>
                        <td align="center" bgcolor="#EFEEF2">80元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.org</td>
                        <td align="center" bgcolor="#EFEEF2">100元</td>
                        <td align="center" bgcolor="#EFEEF2">100元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td height="40" align="center" bgcolor="#EFEEF2">国内英文域名</td>
                        <td align="center" bgcolor="#EFEEF2">.cn/.com.cn/.net.cn/.org.cn</td>
                        <td align="center" bgcolor="#EFEEF2">55元</td>
                        <td align="center" bgcolor="#EFEEF2">75元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td height="40" align="center" bgcolor="#EFEEF2">中国政府域名</td>
                        <td align="center" bgcolor="#EFEEF2">.gov.cn</td>
                        <td align="center" bgcolor="#EFEEF2">180元</td>
                        <td align="center" bgcolor="#EFEEF2">180元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td height="40" align="center" bgcolor="#EFEEF2">中文通用域名</td>
                        <td align="center" bgcolor="#EFEEF2">中文.中国/中文.网络/中文.公司</td>
                        <td align="center" bgcolor="#EFEEF2">320元</td>
                        <td align="center" bgcolor="#EFEEF2">380元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td height="40" align="center" bgcolor="#EFEEF2">中文国际域名</td>
                        <td align="center" bgcolor="#EFEEF2">中文.com 中文.net</td>
                        <td align="center" bgcolor="#EFEEF2">320元</td>
                        <td align="center" bgcolor="#EFEEF2">380元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td height="40" align="center" bgcolor="#EFEEF2">中文国内域名</td>
                        <td align="center" bgcolor="#EFEEF2">中文.cn</td>
                        <td align="center" bgcolor="#EFEEF2">320元</td>
                        <td align="center" bgcolor="#EFEEF2">320元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td height="40" align="center" bgcolor="#EFEEF2" rowspan="21">其它域名</td>
                        <td align="center" bgcolor="#FFFF00" height="40">.top</td>
                        <td align="center" bgcolor="#FFFF00"><b><font color="#FF0000">9元</font></b></td>
                        <td align="center" bgcolor="#FFFF00">36元/年</td>
                        <td align="center" bgcolor="#FFFF00">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.xyz</td>
                        <td align="center" bgcolor="#EFEEF2"><b><font color="#FF0000">18元</font></b></td>
                        <td align="center" bgcolor="#EFEEF2">26元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.cc</td>
                        <td align="center" bgcolor="#EFEEF2">55元</td>
                        <td align="center" bgcolor="#EFEEF2">140元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.wang</td>
                        <td align="center" bgcolor="#EFEEF2">80元</td>
                        <td align="center" bgcolor="#EFEEF2">80元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.pw</td>
                        <td align="center" bgcolor="#EFEEF2">88元</td>
                        <td align="center" bgcolor="#EFEEF2">88元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.name</td>
                        <td align="center" bgcolor="#EFEEF2">88元</td>
                        <td align="center" bgcolor="#EFEEF2">88元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.asia</td>
                        <td align="center" bgcolor="#EFEEF2">155元</td>
                        <td align="center" bgcolor="#EFEEF2">155元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.biz</td>
                        <td align="center" bgcolor="#EFEEF2">155元</td>
                        <td align="center" bgcolor="#EFEEF2">155元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.tel</td>
                        <td align="center" bgcolor="#EFEEF2">155元</td>
                        <td align="center" bgcolor="#EFEEF2">155元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.info</td>
                        <td align="center" bgcolor="#EFEEF2">180元</td>
                        <td align="center" bgcolor="#EFEEF2">180元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.mobi</td>
                        <td align="center" bgcolor="#EFEEF2">180元</td>
                        <td align="center" bgcolor="#EFEEF2">180元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.im</td>
                        <td align="center" bgcolor="#EFEEF2">300元</td>
                        <td align="center" bgcolor="#EFEEF2">300元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.us</td>
                        <td align="center" bgcolor="#EFEEF2">300元</td>
                        <td align="center" bgcolor="#EFEEF2">300元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.co</td>
                        <td align="center" bgcolor="#EFEEF2">300元</td>
                        <td align="center" bgcolor="#EFEEF2">300元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.me</td>
                        <td align="center" bgcolor="#EFEEF2">300元</td>
                        <td align="center" bgcolor="#EFEEF2">300元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.in</td>
                        <td align="center" bgcolor="#EFEEF2">300元</td>
                        <td align="center" bgcolor="#EFEEF2">300元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.hk</td>
                        <td align="center" bgcolor="#EFEEF2">355元</td>
                        <td align="center" bgcolor="#EFEEF2">355元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.la</td>
                        <td align="center" bgcolor="#EFEEF2">360元</td>
                        <td align="center" bgcolor="#EFEEF2">360元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.tv</td>
                        <td align="center" bgcolor="#EFEEF2">380元</td>
                        <td align="center" bgcolor="#EFEEF2">380元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.tw</td>
                        <td align="center" bgcolor="#EFEEF2">455元</td>
                        <td align="center" bgcolor="#EFEEF2">455元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                      <tr>
                        <td align="center" bgcolor="#EFEEF2" height="40">.cm</td>
                        <td align="center" bgcolor="#EFEEF2">855元</td>
                        <td align="center" bgcolor="#EFEEF2">855元/年</td>
                        <td align="center" bgcolor="#EFEEF2">续费一年</td>
                      </tr>
                  </tbody></table>
                </div>
            </div>
            <div class="sub_yuming_c">
              <div class="index_youshi_tit">
                <span className="span1" >选择中华世纪网的优势</span><br/>
                中华世纪网14年网络运维经验，提供全年24小时无休技术在线支持服务。
              </div>
              <div class="index_youshi_list">
                  <div class="index_youshi_list_l">
                      <div class="index_youshi_list_pic"><img src={ym1}/></div>
                        <span class="index_youshi_list_t">中国顶级域名注册商</span><br/>
                        中华世纪网是国际域名ICANN和国内域名CNNIC授权注册商，值得信赖。
                    </div>
                  <div class="index_youshi_list_r">
                      <div class="index_youshi_list_pic2"><img src={ym2}/></div>
                        <span class="index_youshi_list_t">拥有全部域名管理权</span><br/>
                        域名所有人可随时在线更改(姓名，联系方法，密码等)。
                    </div>
                  <div class="index_youshi_list_l">
                      <div class="index_youshi_list_pic"><img src={ym3}/></div>
                        <span class="index_youshi_list_t">免费赠送50条子域名解析</span><br/>
                        免费IP指向(A记录）、别名记录、MX邮件记录、TXT记录等。
                    </div>
                  <div class="index_youshi_list_r">
                      <div class="index_youshi_list_pic2"><img src={ym4}/></div>
                        <span class="index_youshi_list_t">免费支持whois保护设定</span><br/>
                        免费支持whois保护设定，让您的域名信息更安全。
                    </div>
                  <div class="index_youshi_list_l">
                      <div class="index_youshi_list_pic"><img src={ym5}/></div>
                        <span class="index_youshi_list_t">域名解析2小时生效</span><br/>
                        行内首创初次解析2小时生效，一般解析域名生效时间为24-48小时。
                    </div>
                  <div class="index_youshi_list_r">
                      <div class="index_youshi_list_pic2"><img src={ym6}/></div>
                        <span class="index_youshi_list_t">域名自由转入转出</span><br/>
                        域名转进、转出自由、流程方便。
                    </div>       
                    <div class="clear"></div>
                </div>
            </div>
          </div>            
        )
}   }