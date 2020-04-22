import React from 'react';
import '../css/receipt.css'
export default class RECEIPT extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className='receipt-content'>
                <br/>
                <br/>
                <form name="form1" method="post" action="fapiao2.asp">
  <table width="100%" border="0" cellspacing="1" bgcolor="#CCCCCC">
    <tbody><tr bgcolor="#EFEFEF">
      <td height="37" colspan="2" align="center"> 发票申请：    
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">已开票总金额：</font>
      </td><td align="left" bgcolor="#FFFFFF">　 <font color="#ff6600">0 元</font></td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">总入款金额：</font>
      </td><td align="left" bgcolor="#FFFFFF">　 
        0
    元
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">本年度已开票金额：</font>
      </td><td align="left" bgcolor="#FFFFFF">　 <font color="#ff6600">0 元</font> (发票只能按开本年度入款开，请您及时申请发票。 )   
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td width="21%" height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">本年度</font><font color="#666666">入款金额：</font>
      </td><td align="left" bgcolor="#FFFFFF">　 
        0
      元</td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">申请金额： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　<strong>
      <input name="usermoney" type="text" id="usermoney" size="5" maxlength="6"/>
</strong>元（可开发票金额为：0 元）(最小开票金额为：50 元)  (将从您的帐上扣除6%) </font> 
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">发票抬头： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
            <input name="title" type="text" id="title" size="40" maxlength="100"/>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">纳税人识别号： </font>
      </td><td width="79%" height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
        <input name="titleID" type="text" id="titleID" size="30" maxlength="50"/> 
        (个人可以不填写)
</font><font color="#FF0000">(税务局要求企业开具增值税发票必须填写)</font></td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">收件人： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
            <input name="recman" type="text" id="recman"/>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">收件人联系电话： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
            <input name="mobi" type="text" id="mobi"/>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">邮寄方式： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF">　
 <select name="sendtype" id="sendtype">
  <option value="平邮">平邮</option>
  <option value="快递" selected="selected">快递</option>
</select>
 快递费由用户承担，我们将选择信誉较好的顺丰速运（顺丰快递），发票寄出后，我们会将快件运单号码填写在备注内，您可以在<a href="http://www.sf-express.com/cn/sc/" target="_blank">顺丰速运网站</a>查询快件情况，顺丰速运的快递费先付款和到付款价格一样。我们收10元服务费。 <font color="#FF0000">（不建议选择平邮，邮局经常丢掉信件，如果选择平邮未收到信件，可以提交服务工单要求传真发票存根）</font>。</td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">邮编： </font>
      </td><td width="79%" height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
          <input name="postid" type="text" id="postid" size="6" maxlength="6"/>
      </font> 
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">收件人地址：</font>
      </td><td width="79%" height="25" align="left" bgcolor="#FFFFFF">　<font color="#666666">
        <input name="address" type="text" id="address" size="40" maxlength="100" />
      </font> 
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="90" align="center" bgcolor="#F7F7F7"><font color="#666666">发票内容：</font>
      </td><td height="90" align="left" bgcolor="#FFFFFF"><font color="#666666"> 　
            <textarea name="con" cols="40" rows="3" id="con"></textarea>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="90" align="center" bgcolor="#F7F7F7"><font color="#666666">备注：</font>
      </td><td height="90" align="left" bgcolor="#FFFFFF"><font color="#666666"> 　
            <textarea name="usercodeinfo" cols="40" rows="3" id="usercodeinfo"></textarea>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="40" colspan="2" align="center" bgcolor="#F7F7F7"><input type="submit" name="Submit" value="提交"/>      </td></tr>
  </tbody></table>
  <input name="id" type="hidden"/>
</form>
            </div>
        )
    }

}