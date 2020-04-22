import React from 'react';
import '../css/dns.css'
export default class CLOUD extends React.Component {
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
                        <p style={{paddingTop:20+'px'}}>没有开通的云服务器产品</p>
                        <p style={{paddingTop:20+'px'}}>查找云服务器</p>
                        <p className='pstyle'>
                        云服务器名：
                        <input name="domain" type="text" id="domain" size="15" />
                        或IP：
                        <input name="domain" type="text" id="domain" size="15" />
                        <input type="submit" name="Submit" value="搜索" />
                        <a href="#"><font color="#000">今天新开通</font></a>&nbsp;|&nbsp;
                        <a href="#"><font color="#000">一周新开通</font></a>&nbsp;|&nbsp;
                        <a href="#"><font color="#000">一周到期</font></a>&nbsp;|&nbsp;
                        <a href="#"><font color="#000">30天到期</font></a>&nbsp;|&nbsp;
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