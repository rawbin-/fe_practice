### 操作步骤
- 需要node环境，使用 `node server.js` 启动服务端，并可以在启动界面查看请求header
- 配置host `test.com test.org`到启动上面server的ip上
- 打开index.html 查看效果


https://www.cnblogs.com/xishuai/p/jquery-ajax-ie8-cors.html
http://blog.sina.com.cn/s/blog_502b92330102w7pc.html
### 问题解决
#### No Transport
设置jQuery.support.cors=true;
增加crossDomain 参数 	crossDomain: true == !(document.all)
跟添加 XDomainRequest效果一样
加上Charles代理 模拟器抽风的时候 会有 Error: 拒绝访问。


#### 拒绝访问
加上代理就会出现上面的情况，
解决方法如下：点击IE浏览器的的“工具->Internet 选项->安全->自定义级别”将“其他”选项中的“通过域访问数据源”选中为“启用”或者“提示”，点击确定就可以了。

IE8下请求头少一个 application/json(被干掉了)，引入以下错误
<?xml version="1.0" encoding="UTF-8" ?>
<result>
    <requestId>c8a53b3b-13d0-44a7-9d8a-6b4fc405d983</requestId>
    <rtncode>9999</rtncode>
    <rtndata></rtndata>
    <rtnmsg>调用错误，原因：Content type 'application/octet-stream' not supported</rtnmsg>
</result>

在IE9，10，11下，当服务器端返回数据格式为json，且明确设置Content-Type为”application/json;charset=utf-8“时，会提示文件下载


