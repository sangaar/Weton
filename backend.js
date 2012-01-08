
var jsdom = require('jsdom');

var url = 'http://ki-demang.com';

//jsdom.env(url,
//	[
//	'http://code.jquery.com/jquery-1.5.min.js'
//	],
//	function(errors, window) {
//		window.$('.ptmain tr').each(function() {
//			window.$(this).find("td").each(function() {
//			    console.log(window.$(this).text());
//			});
//		});
//	}
//);

jsdom.env(url,
    [
    'http://code.jquery.com/jquery-1.5.min.js'
    ],
    function(errors, window) {

        var $ = window.jQuery;

        // jQuery is now loaded on the jsdom window created from 'agent.body'
        // console.log($('body').html());
        //console.log($('body').html().find('tabel500').find("td").text());
          console.log($('body').find('tabel500').html());

    }
    );


//jsdom.env({
//    html: 'http://news.ycombinator.com/',
//    scripts: [
//    'http://code.jquery.com/jquery-1.5.min.js'
//    ],
//    done: function(errors, window) {
//        var $ = window.$;
//        console.log('HN Links');
//        $('td.title:not(:last) a').each(function() {
//            console.log(' -', $(this).text());
//        });
//    }
//});


