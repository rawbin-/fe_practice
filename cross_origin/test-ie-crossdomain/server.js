var http = require("http");

var server = new http.Server();
server.listen(9000);

server.on("request",function(request,response){
    console.log(request.headers)
    console.log('------------------')
    //不加这个响应头，客户端会报错，无法跨越发请求
    response.setHeader("Access-Control-Allow-Origin","*")
	response.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS")
	response.setHeader("Access-Control-Allow-Headers","customHeader,testHeader,Authorization,Content-Type,X-Requested-With")
    response.writeHead(200,{"Content-Type":"application/json;charset=UTF-8"});
	response.write(JSON.stringify({
		success:true,
		data:{result:1}
	}))
    response.end();
});
