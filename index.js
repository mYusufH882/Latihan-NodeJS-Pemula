const http = require("http")
const fs = require("fs")
const url = require("url")

let PORT = 3000;
const server = http.createServer(function (req, res) {
    var string = url.parse(req.url, true);
    var filename = "." + string.pathname;

    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHeader(404, {"Content-type": "text/html"});
            return res.end("File Tidak Ada");
        }
        
        res.writeHeader(200, {"Content-type": "text/html"});
        res.write(data);
        return res.end();
    })
});

server.listen(PORT);
console.log("Web Server is running on port : http://localhost:" + PORT + "...");