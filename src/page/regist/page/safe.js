import React from 'react';
export default class SAFE extends React.Component {
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
                        <p style={{paddingTop:20+'px'}}>查找服务器</p>
                        <p className='pstyle'>
                        IP：
                        <input name="domain" type="text" id="domain" size="15" />
                        或MAC
                        <input name="domain" type="text" id="domain" size="15" />
                        <input type="submit" name="Submit" value="查找" />
                        <a href="#"><font color="#000">今天新开通</font></a>&nbsp;|&nbsp;
                        <a href="#"><font color="#000">一周新开通</font></a>&nbsp;|&nbsp;
                        <a href="#"><font color="#000">一周到期</font></a>&nbsp;|&nbsp;
                        <a href="#"><font color="#000">30天到期</font></a>&nbsp;|&nbsp;
                        </p>
                        <p>没有开通的托管/租用产品</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                </form>
            </div>
        )
    }

}