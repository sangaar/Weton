var http = require('http');
var url = require('url');
var QS = require('querystring');

app.message(function(client, action, data) {
        if (action ==='search'){
        var param = {
            'tg': data.tg,
            'bl': data.bl,
            'th': data.th
        };
        param = QS.stringify(param);

        //host : http://ki-demang.com/php_files/02%20kalender%20weton%20on%20line.php		
        var siteUrl = url.parse('http://ki-demang.com/php_files/kds10_02wetonproses.php');
  
        var headers = {
            'Host': siteUrl.host,
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.121 Safari/535.2',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': param.length
      
        };

        var site = http.createClient(siteUrl.port || 80, siteUrl.host);

        var request = site.request("POST", siteUrl.pathname, headers);
        request.write(param);
        request.end();

        request.on('response', function(response) {
            response.setEncoding('utf8');
            console.log('Status: ' + response.statusCode);
            response.on('data', function(data) {
                console.log("Received Data (Data Masuk): " + data);
                client.msg('search', data);
            });
        });

    }
});


app.setResourceHandler(function(request, response) {

    app.debug('Client requested resource-id=' + request.id);

    function sendReply(response, error, imageType, data) {
        if (error) {
            app.warn('Failed to load image: ' + error);
            response.failed();
        } else {
            app.debug('Loaded image.');
            response.reply(imageType, data);
        }
    }

    scaling.scale(request.id, request.display_width, request.display_height, 'image/jpeg',
        function(err, data) {
            sendReply(response, err, 'image/jpeg', data);
        }
        );
});

