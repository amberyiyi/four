import React from 'react';
export default class DB extends React.Component {
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
                        <p style={{paddingTop:20+'px'}}>没有开通的数据库产品</p>
                        <p style={{paddingTop:20+'px'}}>查找数据库</p>
                        <p className='pstyle'>
                        数据库名：
                        <input name="domain" type="text" id="domain" size="15" />
                        或FTP用户名
                        <input name="domain" type="text" id="domain" size="15" />
                        或域名
                        <input name="domain" type="text" id="domain" size="15" />
                        <input type="submit" name="Submit" value="查找" />
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