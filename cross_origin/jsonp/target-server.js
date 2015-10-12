var http = require("http");
var url = require("url");

var server = new http.Server();
server.listen(9000);

server.on("request",function(request,response){
    var paramDict = url.parse(request.url,true).query;
    var callback = paramDict.callback
    var retData = callback + '(' +'{"status":"success",data:{"name":"test JSONP"}}'  + ')';
    response.end(retData);
});