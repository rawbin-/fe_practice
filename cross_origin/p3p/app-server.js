var http = require('http');
var server = http.createServer(function(request,response){
    console.log(request.url)
    if(/^\/login.action.*/.test(request.url)){
        console.log('setting cookie...')
        //response.setHeader('Set-Cookie',['logined=true;path=/;domain=.test.com;HttpOnly;','sessionid=session_123456;path=/;domain=.test.com;HttpOnly;'])
        response.setHeader('Set-Cookie',['logined=true;path=/;domain=.test.com;','sessionid=session_123456;path=/;domain=.test.com;'])
    }
    //response.setHeader('P3P','CP=CAO PSA OUR')
    response.writeHead(200,{});
    response.end();
}).listen(9000);