// Contoh core module
var http = require("http");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World!");
  res.end();
});

// server.listen(8080);

// contoh local module
var localmodule = require("./lokalmodul");
localmodule.helloworld();
localmodule.selamatpagi();

const os = require("os");
console.log("Free Memory", os.freemem());

const luasSegitiga = require("./segitiga");
console.log(luasSegitiga(3, 4));
