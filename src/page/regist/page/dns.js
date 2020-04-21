import React from 'react';
import '../css/dns.css'
export default class DNS extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className='list-content'>
                <form name="form1" method="get">
                <table width="100%" border="0" cellSpacing="1" bgcolor="#CCCCCC">
                <tbody>
                    <tr>
                    <td width="9%" height="30" rowSpan="2" bgcolor="#FFFFFF">
                        <p style={{paddingTop:20+'px'}}>没有这类内容</p>
                        <p className='pstyle'>
                        输入已有域名：
                        <input name="domain" type="text" id="domain" size="15" />
                        <input type="submit" name="Submit" value="搜索" />
                        <a href="#"><font color="#000">30天后到期</font></a>&nbsp;&nbsp;
                        <a href="#"><font color="#000">现在到期</font></a>&nbsp;&nbsp;
                        <a href="#"><font color="#000">预注册</font></a>&nbsp;&nbsp;
                        <a href="#"><font color="#000">注册失败</font></a>&nbsp;&nbsp;
                        <a href="#"><font color="#000">续费失败</font></a>&nbsp;&nbsp;
                        <a href="#"><font color="#000">全部</font></a>&nbsp;&nbsp;
                        </p>
                    </td>
                    </tr>
                </tbody>
                </table>
                </form>
            </div>
        )
    }

}