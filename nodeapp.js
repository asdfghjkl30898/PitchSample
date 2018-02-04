//サーバーの立ち上げプログラム

var http = require('http');
var  fs =  require('fs');

http.createServer(function (req, res) {
    fs.readFile(__dirname+ '/sample.html','UTF-8',function(err,data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.write("get");
// res.write(__dirname);
// res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000/');
