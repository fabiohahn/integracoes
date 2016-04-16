var http = require('http'),
	https = require('https'),
	env = process.env.NODE_ENV || 'development',
	config = require('./config/env/' + env);

http.createServer(function(browser_request, browser_response){
	var options = {
		host: 'graph.facebook.com',
		path: '/441530669223946/events/?access_token=' + config.access_token,
		method: 'GET',
		headers: { 'Content-Type': 'application/json'}
	};

	var proxy_request = https.request(options);
	proxy_request.end();

	proxy_request.addListener('response', function(proxy_response){
		browser_response.writeHead(proxy_response.statusCode, proxy_response.headers);

		proxy_response.addListener('data', function(chunk){
			browser_response.write(chunk);
		});

		proxy_response.addListener('end', function(){
			browser_response.end();
		});
	});
})
.listen(config.port, config.address, function(){
	console.log('express rodando na porta ' + config.port)
});