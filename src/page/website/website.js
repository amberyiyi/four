import React from 'react';
import Footer from '../../footer'
import style from "./website.css"

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


export default class Website extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <div>
 
                <div className="sub_about_banner2" >
                                       
                </div>
                <div className="sub_hongtiao">
	                <div className="sub_hongtiao_t"><a href="/">网站首页</a> &gt; <a href="/user/">网站建设</a></div>
                </div>


        </div>


<div className="sub_about_k_c">
    <div className="sub_about_k_c_l">
        	<ul className="ul1"> <Router>
                <div className="nav1">
                <li><Link to="/website/xianhualipingongyipin/">鲜花、礼品、工艺品</Link></li>
            	<li><Link to="/website/shipinjiushuichaye/">食品、酒水、茶叶</Link></li>
            	<li><Link to="/website/nongyelinye">农业、林业</Link></li>
            	<li><Link to="jixiegongyezhipin">机械、工业制品</Link></li>
            	<li><Link to="/website/dianzidianqidiangong">电子、电气、电工</Link></li>
            	<li><Link to="/website/wujinmenchuang">五金、门窗</Link></li>
            	<li><Link to="/website/zhaomingdengjunengyuan">照明、灯具、能源</Link></li>
            	<li><Link to="/website/qicheqipei">汽车、汽配</Link></li>
            	<li>< Link to="/website/anfangjiankongqicai">安防、监控器材</Link></li>
            	<li><Link to="/website/yiqiyibiaoliangju">仪器、仪表、量具</Link></li>
            	<li><Link to="/website/yinshuabaozhuang">印刷、包装</Link></li>
            	</div>
                <Route path="/website/"  component={Xianhualipingongyipin} />
                <Route path="/website/xianhualipingongyipin/"  component={Xianhualipingongyipin} />
                <Route path="/website/shipinjiushuichaye/"  component={shipinjiushuichaye} />
                </Router>
              
           </ul>
            <div className="clear"></div>
               
    </div>
    
        
</div>
<div className="clear"></div>
    </div>    )
}  
 }
 export class Xianhualipingongyipin extends React.Component{
    render(){return(
<div className="content">
            <div style={{color:"red",fontSize:20,marginLeft:30,marginTop:30}}>鲜花、礼品、工艺品类：</div>
             <div className="haha">
                 <ul>
                      <li><img src="https://www.c361.com/img/hostimg/website/img/3090.jpg" /><br />模板编号:3090</li>
                      <li><img src="https://www.c361.com/img/hostimg/website/img/3090.jpg" /><br />模板编号:3090</li>
                      <li><img src="https://www.c361.com/img/hostimg/website/img/3090.jpg" /><br />模板编号:3090</li>
                      <li><img src="https://www.c361.com/img/hostimg/website/img/3090.jpg" /><br />模板编号:3090</li>
                      <li><img src="https://www.c361.com/img/hostimg/website/img/3090.jpg" /><br />模板编号:3090</li>
                      <li><img src="https://www.c361.com/img/hostimg/website/img/3090.jpg" /><br />模板编号:3090</li>

                 </ul>
             </div>
</div>)
    }
}
export class shipinjiushuichaye extends React.Component{
    render(){return(
        <div className="content">
        <div style={{color:"red",fontSize:20,marginLeft:30,marginTop:30}}>鲜花、礼品、工艺品类：</div>
         <div className="haha">
             <ul>
                  <li><img src="https://www.c361.com/img/hostimg/website/img/3090.jpg" /><br />模板编号:3090</li>
                  <li><img src="https://www.c361.com/img/hostimg/website/img/3070.jpg" /><br />模板编号:3090</li>
                  <li><img src="https://www.c361.com/img/hostimg/website/img/3090.jpg" /><br />模板编号:3090</li>
                  <li><img src="https://www.c361.com/img/hostimg/website/img/3070.jpg" /><br />模板编号:3090</li>
                  <li><img src="https://www.c361.com/img/hostimg/website/img/3090.jpg" /><br />模板编号:3090</li>
                  <li><img src="https://www.c361.com/img/hostimg/website/img/3087.jpg" /><br />模板编号:3090</li>

             </ul>
         </div>
</div>
        
        )
    }
}

