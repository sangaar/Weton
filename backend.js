
var http = require('http');
var url = require('url');
var QS = require('querystring');

app.message(function(client, action, data) {
    if (action === 'search') {
      	
        var param = {
            'tg': data.tg,
            'bl': data.bl,
            'th': data.th
        };
        param = QS.stringify(param);
		
        var siteUrl = url.parse('http://ki-demang.com/php_files/kds10_02wetonproses.php');
        console.log('url : ' + url);
        var headers = {
            'Host': siteUrl.host,
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.121 Safari/535.2',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': param.length
        //'Cookie': 'key=value',
        //....
        };

        var site = http.createClient(siteUrl.port || 80, siteUrl.host);

        var request = site.request("POST", siteUrl.pathname, headers);
        request.write(param);
        request.end();

        request.on('response', function(response) {
            response.setEncoding('utf8');
            console.log('Status: ' + response.statusCode);
            response.on('data', function(data) {
                console.log("Received Data: " + data);
            });
        });

    }
});



