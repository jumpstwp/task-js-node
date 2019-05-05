const http = require("http");
const url = require("url");

module.exports = http.createServer((req, res) => {
  var service = require("./service.js");
  const reqUrl = url.parse(req.url, true);

  // GET Endpoint
  if (reqUrl.pathname == "/task1" && req.method === "GET") {
    // console.log("Request Type:" + req.method + " Endpoint: " + reqUrl.pathname);
    service.task1(req, res);
  } else if (reqUrl.pathname == "/task2" && req.method === "GET") {
    service.task2(req, res);
  }
});
