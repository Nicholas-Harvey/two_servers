// Require/import the HTTP module
var http = require("http");

// const http = require("hhtp");
// Define a port to listen for incoming requests

var PORT7000 = 7000;
var PORT7500 = 7500;
// const PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Hey, you are an awesome person!:" + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT7000, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT7000);
});

server.listen(PORT7500, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT7500);
  });
