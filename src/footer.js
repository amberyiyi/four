import ReactDOM from 'react-dom'
import React from 'react'
import "./css/footer.css"
import gongan from './img/gongan.png'
import footerone from './img/hd315.gif'
import footertwo from './img/xinyongpinganlogo.png'
 export default class Footer extends React.Component {
    render() {
      return (
        <div className='public'>
          {/* footer */}
          <div className="footer" >
              <div className='footer-cont' >
                    <div className="footer-list" >
                      <dl>
                        <dt>关于我们</dt>
                        <dd><a href="#">公司简介</a></dd>
                        <dd><a href="#">公司资质</a></dd>
                        <dd><a href="#">联系我们</a></dd>
                        <dd><a href="#">代理加盟</a></dd>
                        <dd><a href="#">法律法规</a></dd>
                      </dl>
                    </div>
                    <div className="footer-list" >
                      <dl>
                        <dt>关于我们</dt>
                        <dd><a href="#">公司简介</a></dd>
                        <dd><a href="#">公司资质</a></dd>
                        <dd><a href="#">联系我们</a></dd>
                        <dd><a href="#">代理加盟</a></dd>
                        <dd><a href="#">法律法规</a></dd>
                      </dl>
                    </div>   
                    <div className="footer-list" >
                      <dl>
                        <dt>关于我们</dt>
                        <dd><a href="#">公司简介</a></dd>
                        <dd><a href="#">公司资质</a></dd>
                        <dd><a href="#">联系我们</a></dd>
                        <dd><a href="#">代理加盟</a></dd>
                        <dd><a href="#">法律法规</a></dd>
                      </dl>
                    </div>    
                    <div className="footer-list" >
                      <dl>
                        <dt>关于我们</dt>
                        <dd><a href="#">公司简介</a></dd>
                        <dd><a href="#">公司资质</a></dd>
                        <dd><a href="#">联系我们</a></dd>
                        <dd><a href="#">代理加盟</a></dd>
                        <dd><a href="#">法律法规</a></dd>
                      </dl>
                    </div>    
                    <div className="footer-list" >
                      <dl>
                        <dt>关于我们</dt>
                        <dd><a href="#">公司简介</a></dd>
                        <dd><a href="#">公司资质</a></dd>
                        <dd><a href="#">联系我们</a></dd>
                        <dd><a href="#">代理加盟</a></dd>
                        <dd><a href="#">法律法规</a></dd>
                      </dl>
                    </div>  
                    <div className='footer-right' >
                        公司名称：妙思经营中心（中华世纪网）<br/>
                        公司地址：北京市海淀区温泉航材大道11-4号<br/>
                        《中华人民共和国增值电信业务经营许可证》<br/>
                        <a target="_blank" href="https://www.c361.com/default/ICP.jpg">
                          <font color="#FFFFFF">京ICP证070633号</font>
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a target="_blank" href="#">
                          <font color="#FFFFFF">京ICP备08012273号</font>
                        </a>
                        <br/>
                        中国互联网络信息中心认证编号：010202008020100002
                        <br/>
                        公安局备案编号：
                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802022212">
                          <img border="0" src={gongan} width="20" height="20"/>
                          <font color="#FFFFFF">京公网安备 11010802022212号</font>
                        </a>
                        <br/>
                        公司营业执照号码：
                        <a target="_blank" href="https://www.c361.com/default/c361.jpg">
                          <font color="#FFFFFF">9111010877158629X0</font>
                        </a>
                        <br/>
                        <br/>
                        <b><font color="#ffff00">客服热线： 手机:186 0066 0491</font></b>
                    </div>  
                    <div className="clear" ></div> 
                   
              </div>
              <div className="footer-bottom" >
                  <div className="footer-bottom-cont" >
                      <div className="footer-bottom-cont-left" >
                      <a href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202008020100002" target="_blank">
                        <img src={footerone}/>
                      </a>&nbsp;&nbsp;
                      <a href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202008020100002" target="_blank">
                        <img src={footertwo}/>
                      </a>
                      </div>
                      <div className="footer-bottom-cont-left" style={{"lineHeight":"50px"}} >
                      Copyright 2004-2018 北京妙思科技有限公司 All Rights Reserved 中华世纪网 版权所有
                      </div>
                  </div>
              </div>
          </div>
          {/* footer */}
        </div>
      )
    }
  }