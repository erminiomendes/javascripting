const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function(request, response) {
  //response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
  const url = request.url;
  const method = request.method;
  const requestInfo = `${method} ${url}`;

  console.log(requestInfo);



  if (requestInfo === 'GET /home'){
    response.write('welcome to my HOME page');
    response.end

  } else if (requestInfo !== ''){
    response.write(`${url}`);
  } else {
    response.write('"404 Page Not Found"');
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});






// const { response } = require("express");
// const http = require("http");
// const PORT = 8080;

// // a function which handles requests and sends response
// const requestHandler = function(request, response) {
//   console.log('In requestHandler'); // NEW LINE
//   response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
// };

// const server = http.createServer(requestHandler);
// console.log('Server created'); // NEW LINE

// server.listen(PORT, () => {
//   console.log(`Server listening on: http://localhost:${PORT}`);
// });

// console.log('Last line (after .listen call)'); // NEW LINE