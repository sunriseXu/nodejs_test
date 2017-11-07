var http=require('http');
http.createServer(function(req, res){
	console.log('apple');
	res.write('{"city":"wuhan"}');
	res.end();
}).listen(1234);