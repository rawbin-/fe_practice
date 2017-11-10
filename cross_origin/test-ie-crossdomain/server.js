var http = require("http");

var server = new http.Server();
server.listen(9000);

server.on("request",function(request,response){
    //不加这个相应头，客户端会报错，无法跨越发请求
    response.setHeader("Access-Control-Allow-Origin","*")
	response.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS")
	//response.setHeader("Access-Control-Allow-Headers","customHeader,testHeader")
    response.writeHead(200,{"Content-Type":"application/json;charset=UTF-8"});
//    response.write('msg: "cross origin by cors"');
	response.write(JSON.stringify({
		success:true,
		data:{result:1}
	}))
    response.end();
});