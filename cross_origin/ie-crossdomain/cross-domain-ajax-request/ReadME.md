### 操作步骤
- 需要node环境，使用 `node server.js` 启动服务端，并可以在启动界面查看请求header
- 配置host `test.com test.org`到启动上面server的ip上
- 打开index.html 查看效果

### 问题解决
#### No Transport
增加crossDomain 参数 	crossDomain: true == !(document.all)
跟添加 XDomainRequest效果一样
加上Charles代理 模拟器抽风的时候 会有 Error: 拒绝访问。