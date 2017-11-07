var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "/Users/User/Desktop/js/";
http.createServer(function(req, res){
	var urlobj=url.parse(req.url,true,false);
	fs.readFile(ROOT_DIR+urlobj.pathname,function(err,data){
		if(err){
			res.writeHead(404);
			res.end(JSON.stringify(err));
		}
		res.writeHead(200);
		res.end(data);
	});

}).listen(8080);