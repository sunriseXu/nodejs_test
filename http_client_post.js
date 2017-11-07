var http=require('http');
var options={
	hostname:'localhost',
	port:'8080',
	method:'POST'
}

var client=http.request(options, function(response){
	var response_text='';
	response.on('data',function(data){
		response_text+=data;
	});
	response.on('end',function(){
		var res_obj=JSON.parse(response_text);
		console.log('raw message: '+response_text);
		console.log('Message: '+res_obj.message);
		console.log('question: '+res_obj.question);
	})
});
client.write('{"name":"bob","occupation":"google"}');
client.end();