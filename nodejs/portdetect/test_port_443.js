var httpsModule = require('https');
var fs = require('fs');

var https = httpsModule.Server({
     key: fs.readFileSync('./certs/server.key'),
     cert: fs.readFileSync('./certs/server.crt')
}, function(req, res){
    res.writeHead(200);
    res.end("hello world\n");
});

//https默认de监听端口时443，启动1000以下的端口时需要sudo权限
https.listen(443, function(err){  
     console.log("https listening on port: 443");
});

var cmd=process.platform=='win32'?'tasklist':'ps aux';
var exec = require('child_process').exec;
var qqname='qq';
exec("netstat -ano", function(err, stdout, stderr) {
    if(err){ return console.log(err); }
    stdout.split('\n').filter(function(line){
		if(line.indexOf("0.0.0.0:443") > 0 || line.indexOf('[::]:443') > 0 ) {
			console.log("there is a process listen on 443")
		}
    });
});


var https = require('https');
https.get({
	 host: 'qunarzz.com',
	 port:443,
	 path: '/',
	 method: 'GET',
	 rejectUnauthorized:false,
	 key: fs.readFileSync('./certs/server.key'),
     cert: fs.readFileSync('./certs/server.crt')
},function(resp){
		console.log(arguments.length)
		console.log(resp.statusCode)
}).on('error',function(err){
	console.log(err)
})