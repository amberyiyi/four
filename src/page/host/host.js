import React from 'react';
import '../host/css/host.css'
import ym1 from './img/ys1.png'
import ym2 from './img/ys2.png'
import ym3 from './img/ys3.png'
import ym4 from './img/ys4.png'
import ym5 from './img/ys5.png'
import ym6 from './img/ys6.png'
import zt from './img/zt.png'
export default class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="cont">
               {/* lijing dafdfadfadfadfadfadfadfadf */}
               <div className="sub_type_k">
                  <ul>
                      <li><a href="#"><b><font color="#FFFF00">免费空间</font></b></a></li>
                      <li><a href="#">国内主机</a></li>
                      <li><a href="#">备案主机</a></li>
                      <li><a href="#">香港主机</a></li>
                      <li><a href="#">美国主机</a></li>
                      <li><a href="#">日本主机</a></li>
                      <li><a href="#">新加坡主机</a></li>
                      <li><a href="#">俄罗斯主机</a></li>
                      <div class="clear"></div>
                    </ul>
              </div>
              {/* global start */}
              <div class="type_list_k">
                <div class="type_list_k_c">
                {/* 列表1-1 */}
                <div class="index_xuji_list">
                  <div class="index_xuji_list_c">
                      <dl>
                          <dt>香港迷你</dt>
                            <dd><font color="#CC0000">网站空间：100M</font></dd>
                            <dd>语言：支持Html/Asp</dd>
                            <dd>数据库：不支持MySQL/MsSQL</dd>
                            <dd>可绑定域名 10 个</dd>
                            <dd>网络流量2G/月</dd>
                            <dd>可选机房：香港</dd>
                            <dd><a href="/user/selfhost.asp?id=40"><span class="xuji_yuan">免费体验10天</span></a></dd>
                            <dd><span class="xuji_fu">年付：</span><span class="xuji_yuan">60</span> <span class="xuji_fu">元</span></dd>
                        </dl>
                    </div>
                    <div class="xuji_dg"><a href="#">购买</a></div>
                    <div class="xuji_gd"><a href="#">详细</a></div>
                </div>
                {/* 列表1-2 */}
                <div class="index_xuji_list">
                  <div class="index_xuji_list_c">
                      <dl>
                          <dt>香港迷你</dt>
                            <dd><font color="#CC0000">网站空间：100M</font></dd>
                            <dd>语言：支持Html/Asp</dd>
                            <dd>数据库：不支持MySQL/MsSQL</dd>
                            <dd>可绑定域名 10 个</dd>
                            <dd>网络流量2G/月</dd>
                            <dd>可选机房：香港</dd>
                            <dd><a href="/user/selfhost.asp?id=40"><span class="xuji_yuan">免费体验10天</span></a></dd>
                            <dd><span class="xuji_fu">年付：</span><span class="xuji_yuan">60</span> <span class="xuji_fu">元</span></dd>
                        </dl>
                    </div>
                    <div class="xuji_dg"><a href="#">购买</a></div>
                    <div class="xuji_gd"><a href="#">详细</a></div>
                </div>
                {/* 列表1-3 */}
                <div class="index_xuji_list">
                  <div class="index_xuji_list_c">
                      <dl>
                          <dt>香港迷你</dt>
                            <dd><font color="#CC0000">网站空间：100M</font></dd>
                            <dd>语言：支持Html/Asp</dd>
                            <dd>数据库：不支持MySQL/MsSQL</dd>
                            <dd>可绑定域名 10 个</dd>
                            <dd>网络流量2G/月</dd>
                            <dd>可选机房：香港</dd>
                            <dd><a href="/user/selfhost.asp?id=40"><span class="xuji_yuan">免费体验10天</span></a></dd>
                            <dd><span class="xuji_fu">年付：</span><span class="xuji_yuan">60</span> <span class="xuji_fu">元</span></dd>
                        </dl>
                    </div>
                    <div class="xuji_dg"><a href="#">购买</a></div>
                    <div class="xuji_gd"><a href="#">详细</a></div>
                </div>
                {/* 列表1-4 */}
                <div class="index_xuji_list">
                  <div class="index_xuji_list_c">
                      <dl>
                          <dt>香港迷你</dt>
                            <dd><font color="#CC0000">网站空间：100M</font></dd>
                            <dd>语言：支持Html/Asp</dd>
                            <dd>数据库：不支持MySQL/MsSQL</dd>
                            <dd>可绑定域名 10 个</dd>
                            <dd>网络流量2G/月</dd>
                            <dd>可选机房：香港</dd>
                            <dd><a href="/user/selfhost.asp?id=40"><span class="xuji_yuan">免费体验10天</span></a></dd>
                            <dd><span class="xuji_fu">年付：</span><span class="xuji_yuan">60</span> <span class="xuji_fu">元</span></dd>
                        </dl>
                    </div>
                    <div class="xuji_dg"><a href="#">购买</a></div>
                    <div class="xuji_gd"><a href="#">详细</a></div>
                </div>
                </div>
              </div>
              <div className="tp">
                <img src={zt}/>
              </div>
              {/* 中华世纪网优势 */}
              <div class="sub_yuming_c">
              <div class="index_youshi_tit">
                <span className="span1" >选择中华世纪网的优势</span><br/>
                中华世纪网14年网络运维经验，提供全年24小时无休技术在线支持服务。
              </div>
              <div class="index_youshi_list">
                  <div class="index_youshi_list_l">
                      <div class="index_youshi_list_pic"><img src={ym1}/></div>
                        <span class="index_youshi_list_t">云计算技术</span><br/>
                        企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全
                    </div>
                  <div class="index_youshi_list_r">
                      <div class="index_youshi_list_pic2"><img src={ym2}/></div>
                        <span class="index_youshi_list_t">负载均衡</span><br/>
                        集合多台主机的服务能力，可以随时实现水平扩展、系统扩容，增加对外业务服务能力，有效避免单点故障。
                    </div>
                  <div class="index_youshi_list_l">
                      <div class="index_youshi_list_pic"><img src={ym3}/></div>
                        <span class="index_youshi_list_t">服务器性能监控</span><br/>
                        监控服务器CPU、内存、硬盘等使用情况和性能，可根据客户要求提供最近一月历史报告。
                    </div>
                  <div class="index_youshi_list_r">
                      <div class="index_youshi_list_pic2"><img src={ym4}/></div>
                        <span class="index_youshi_list_t">流量监控</span><br/>
                        为客户提供实时、历史流量监控服务，以便客户对业务应用使用带宽进行分析
                    </div>
                  <div class="index_youshi_list_l">
                      <div class="index_youshi_list_pic"><img src={ym5}/></div>
                        <span class="index_youshi_list_t">服务器安全检测</span><br/>
                        为客户服务器提供入侵检测与防护、漏洞扫描、流量清洗、病毒防范、系统加固、安全管理服务、数据存储备份等
                    </div>
                  <div class="index_youshi_list_r">
                      <div class="index_youshi_list_pic2"><img src={ym6}/></div>
                        <span class="index_youshi_list_t">专属工程师服务</span><br/>
                        由专属工程师负责跟进和处理故障，并对故障进行分析和总结。7×24小时专业工程师，全天守候。
                    </div>       
                    <div class="clear"></div>
                </div>
              </div>
            </div>
        )
}   }