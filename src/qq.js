import React from 'react';
import "./css/qq.css";

// import 'element-theme-default';

export default class QQ extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick(){
        document.getElementById('call').style.display="block"
        document.getElementById('qq').style.display="none"
    }
   callClick(){
        document.getElementById('call').style.display="none"
        document.getElementById('qq').style.display="block"
    }
    render(){
        
        return(
            <div>
            <div className="qq" id="qq" onClick={this.handleClick.bind(this)}>
                <div className="contents">在</div>
                <div className="contents">线</div>
                <div className="contents">咨</div>
                <div className="contents">询</div>
            </div>
            <div id="call" className="call" onClick={this.callClick.bind(this)}>
                    <img src={require("./img/qq.png")} />
                    <a href="#">联系我们</a>
                    
            </div>
            </div>
        )
}   

}