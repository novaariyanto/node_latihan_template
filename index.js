// impor modul mementjs
var moment = require("moment");
var salam = require("./salam");
var url = require("url");
var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req,res) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // untuk router
    switch(request.url){
        case '/about':
            response.write("Ini adalah halaman about");
            break;
        case '/profile':
            response.write("Ini adalah halaman profile");
            break;
        case '/produk':
            response.write("ini adalah halaman produk");
            break;
        default: 
            response.write("404: Halaman tidak ditemukan");
    }
    response.end();

    response.writeHead(200, { 'Content-Type': 'text/html' });
    // untuk query string
    // var q = url.parse(request.url, true).query;
    // var txt = 'Kata kunci: ' + q.keyword;
    // response.end(txt);
    
}).listen(8000);

console.log('server is running on http://localhost:8000');
// menggunakan modul momentjs
// console.log(salam.salampagi());
// console.log("Sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));
// console.log('log', 'server running localhost:8080');