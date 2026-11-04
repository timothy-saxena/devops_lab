const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end("<h1>Welcome to DevOps Lab</h1>");
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server listening on port 3000");
});
