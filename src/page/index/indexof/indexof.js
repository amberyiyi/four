import React, { Component } from 'react';

// import { Input } from 'antd';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader,Button } from 'antd';


const { Search } = Input;
import 'antd/dist/antd.css';
import './indexof.css'

class Indexof extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
        }
    }
    render() {
        return (
            <div className="indexof">
                <div className="titimg"><img src={require("./images/keys.png")}  /></div>
                
                <Input.Group compact  className="yuming">
                <span className="www">www.</span>
                    <Input defaultValue="请输入你想要注册的域名，如c361" className="input" />
                    <Select defaultValue=".com" className="select">
                        <Select.Option value="com">.com</Select.Option>
                        <Select.Option value="net">.net</Select.Option>
                        <Select.Option value="cn">.cn</Select.Option>
                        <Select.Option value="top">.top</Select.Option>
                        <Select.Option value="org">.org</Select.Option>
                        <Select.Option value="hk">.hk</Select.Option>
                        <Select.Option value="cc">.cc</Select.Option>
                        <Select.Option value="tv">.tv</Select.Option>
                    </Select>
                    <Button className="but" type="primary">查询域名</Button>
                </Input.Group>
                <div className="yunming_price">.com <font color="#FF0000"><b>35</b></font>元/首年&nbsp;&nbsp;<font color="#FF0000">.top</font> 18元/首年&nbsp;&nbsp;<font color="#FF0000">.xyz</font> 18元/首年&nbsp;&nbsp;.cn 55元/首年&nbsp;&nbsp;.net 60元/首年&nbsp;&nbsp;.cc 55元/首年&nbsp;&nbsp;.中国/.cn 320元/首年&nbsp;&nbsp;.hk 350元/首年&nbsp;&nbsp;.mobi 150元/首年&nbsp;&nbsp;.biz 200元/首年</div>
            </div>
        )
    }
}
export default  Indexof;
