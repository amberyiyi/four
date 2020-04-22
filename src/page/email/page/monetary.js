import React from 'react';
export default class MONEY extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className='list-content'>
                
               <font color="#000000">
            <br /><div style={{marginLeft:"2%"}}>
                    fqt123，
                    您当前的可用金额：<font face="Arial, Helvetica, sans-serif">
                    0.00 </font>元 　等待入帐金额：<font face="Arial, Helvetica, sans-serif">
                    0.00 </font>元
                    <a href="moneyana.asp">消费统计&gt;&gt;</a><br/>
               
            <br />
            数据库中不存在此类款项操作记录。
                   </div>
            <br />
            
                <form method="get" name="form1">

                <table width="100%" height="20" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr bgcolor="">
                    <td>查询指定时间段的财务流水：</td>
                    </tr>
                </tbody></table>
                <table width="100%" border="0" cellspacing="1" bgcolor="#CCCCCC">
                    <tbody><tr>
                    <td width="9%" height="30" rowspan="2" bgcolor="#FFFFFF"><p>　起始时间：
                            <input name="starttime" type="text" id="starttime" value="2020-4-1" size="11"/>
                            　结束时间：
                            <input name="endtime" type="text" id="endtime" value="2020/4/21" size="11"/>
                            　每页记录数：
                            <input name="pagesize" type="text" id="pagesize" value="25" size="3"/>　
                            分类：
                            <select name="isadd" id="isadd">
                            <option selected="">全部</option>
                            <option value="y">入款</option>
                            <option value="n">消费</option>
                            </select>
                        <input type="submit" name="Submit" value="查找" />
                    </p></td>
                    </tr>
                </tbody></table>
                </form>
                </font>
            </div>
        )
    }

}