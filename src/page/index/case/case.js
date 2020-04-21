import React, { Component } from 'react';

import './case.css'

class Case extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="case">
                <div className="title">我们的典型客户案例</div>
                <div className="contents">
                    <div className="card"><img src={require("./image/al1.jpg")} /></div>
                    <div className="card"><img src={require("./image/al2.jpg")} /></div>
                    <div className="card"><img src={require("./image/al3.jpg")} /></div>
                    <div className="card"><img src={require("./image/al4.jpg")} /></div>
                    <div className="card"><img src={require("./image/al5.jpg")} /></div>
                    <div className="card"><img src={require("./image/al6.jpg")} /></div>
                    <div className="card"><img src={require("./image/al7.jpg")} /></div>
                    <div className="card"><img src={require("./image/al8.jpg")} /></div>
                    <div className="card"><img src={require("./image/al9.jpg")} /></div>
                    <div className="card"><img src={require("./image/al10.jpg")} /></div>
                    <div className="card"><img src={require("./image/al11.jpg")} /></div>
                    <div className="card"><img src={require("./image/al12.jpg")} /></div>
                </div>
            </div>
        )
    }
}
export default  Case;
