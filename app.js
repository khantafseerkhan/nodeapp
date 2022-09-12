var http = require("http");
var app=require("./restapis/urls.js").appModule();


var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');