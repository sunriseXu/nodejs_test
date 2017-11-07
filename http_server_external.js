var http=require('http');
var url=require('url');
var qstring=require('querystring');

function sendResponse(weatherData, res){
	var page = '<!DOCTYPE html><html><head><title>weather</title></head>'+
	'<body><form method="post">city:<input name="city"><br>'+
	'<input type="submit" value="get weather"></form>';
	if(weatherData){
		page+='<h1>weater info</h1><p>'+weaterData+'</p>';
	}
	page+='</body></html>';
	res.end(page);

}


function parseWeather(weatherResponse, res){
	var weatherData='';
	weatherResponse.on('data',function(chunk){
		weaterData+=chunk;
		console.log(weatherData);
	});
	weaterResponse.on('end',function(chunk){
		sendResponse(weaterData, res);
	})
}


function getWeather(city, res){
	var options={
		host:'localhost',
		port:1234,
		
	};
	//console.log(city);
	http.request(options, function(weatherResponse){
		parseWeather(weatherResponse, res);
	});
}



http.createServer(function(req, res){
	if(req.method=='POST'){
		var reqData='';
		req.on('data',function(data){
			reqData+=data;
		});
		req.on('end',function(){
			var postParams=qstring.parse(reqData);
			console.log(postParams.city);
			getWeather(postParams.city, res);
		});
	}else{
		sendResponse(null, res);
	}
}).listen(8080);