var http = require('http');
var options={
	hostname:'localhost',
	port:8080
};
function handleResponse(response){
	var text = ''
	response.on('data',function(data){
		text += data;
	});
	response.on('end', function(){
		console.log('response header: '+response.headers);
		console.log('response status : '+response.statusCode);
		console.log('response text: \n'+text);
	});
};
http.request(options, function(response){
	handleResponse(response);
}).end();