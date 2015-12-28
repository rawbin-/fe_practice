var fs = require('fs');
var https = require('https');
var exec = require('child_process').exec;


exec("netstat -ano", function(err, stdout, stderr) {
    if(err){ return console.log(err); }
    stdout.split('\n').filter(function(line){
		if(line.indexOf("0.0.0.0:443") > -1 || line.indexOf('[::]:443') > -1 ) {
			console.log("there is already a process listen on 443")
		}
    });
});

var server = https.Server({
     key: fs.readFileSync('./certs/server.key'),
     cert: fs.readFileSync('./certs/server.crt')
}, function(req, res){
    res.writeHead(200);
    res.end("hello world\n");
}).listen(443, function(err){  
     console.log("https listening on port: 443");
});

https.get({
	 host: 'localhost',
	 port:443,
	 path: '/',
	 method: 'GET',
	 rejectUnauthorized:false,
	 key: fs.readFileSync('./certs/server.key'),
     cert: fs.readFileSync('./certs/server.crt')
},function(resp){
	if(resp.statusCode !== 200){
		console.log("error to start the server normally")
		server.close();
	}
		console.log(resp.statusCode)
}).on('error',function(err){
	console.log(err)
})