var http=require('http');
http.createServer(function (req, res){
	var jsonData='';
	var apple;
	req.on('data', function(chunk){
		
		jsonData+=chunk;
		apple='apple';
	});
	var resObj;
	req.on('end',function(){
		var reqObj=JSON.parse(jsonData);
		resObj={
			message:'Hello'+reqObj.name,
			question:'are you a good '+reqObj.occupation+'?'
		};
		res.writeHead(200);
		res.write(JSON.stringify(resObj));
		res.end();
		console.log(apple);
	});
	console.log(resObj);
	console.log(apple);
		
}).listen(8080);