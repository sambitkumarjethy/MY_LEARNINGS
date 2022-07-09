const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
