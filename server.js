const http = require("http"), // import HTTP module for web server
  fs = require("fs"), // import file system module
  url = require("url"); // import url module

/*
request handler - web server 
called every time an HTTP request is made against server, 
url module grabs and reads a URL requst sent by server,
fs module sends back request
*/

http
  .createServer((request, response) => {
    let addr = request.url, // grabs URL from request
      q = new URL(addr, "http://" + request.headers.host), // stored parsed URL from user
      filePath = "";

    fs.appendFile(
      "log.txt", // appends to log.txt file
      "URL: " + addr + "\nTimestamp: " + new Date() + "\n\n", // appends new info - log of URL, time and date
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Added to log.");
        }
      }
    );

    if (q.pathname.includes("documentation")) {
      filePath = __dirname + "documentation.html"; // directory name + documentation, complete filepath
    } else {
      console.log("hello node");
      filePath = "index.html"; // returns to main page
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        throw err;
      }

      response.writeHead(200, { "Content-Type": "text/html" }); // adds header to res, returns http status code 200, OK
      response.write(data);
      response.end(); // res ends
    });
  })
  .listen(8080); // listening port 8080

console.log("My first Node test server is running on Port 8080");
