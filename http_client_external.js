var http=require('http');
var options={
	hostname:'localhost',
	port:8080
	method:'POST'
};
var client=http.request(options, function(response){
	var weatherpage='';
	response.on('data',function(chunk){
		weaterpage+=chunk;
	});
	response.on('end', function(){
		console.log(weatherpage);
	});
});
client.write('{"city":"wuhan"}');
client.end();