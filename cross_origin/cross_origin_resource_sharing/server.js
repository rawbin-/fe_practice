var http = require("http");

var server = new http.Server();
server.listen(9000);

server.on("request",function(request,response){
    //不加这个相应头，客户端会报错，无法跨越发请求
    response.setHeader("Access-Control-Allow-Origin","http://source.test.com")
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write('msg: "cross origin by cors"');
    response.end();
});