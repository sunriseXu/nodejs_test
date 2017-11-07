var http=require('http');
var message=[
	'helo world',
	'miku',
	'sisiku',
	'sanxia'
];
var server=http.createServer(function(req, res){
	res.setHeader("content-type", "text/html");
	res.writeHead(200);
	res.write('<html><head><title>simple http server</title></head>');
	res.write('<body>');
	for(var i in message){
		res.write('<h2>'+message[i]+'</h2>');
	}
	res.write('</body></html>');
	res.end();
}).listen(8080);