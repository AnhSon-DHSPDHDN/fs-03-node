import http from "http";
import fs from "fs";

const PORT = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(
//     JSON.stringify({
//       data: [
//         {
//           id: 1,
//           name: "Son",
//         },
//       ],
//     })
//   );
// });

function errorNotFound(response) {
  response.statusCode = 404;
  response.setHeader("Content-Type", "text/html");
  response.end("Resource not found!");
}

const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/":
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      fs.createReadStream("./public/home.html").pipe(response);
      break;

    case "/about":
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      fs.createReadStream("./public/about.html").pipe(response);
      break;

    case "/products":
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      fs.createReadStream("./public/products.html").pipe(response);
      break;

    default:
      errorNotFound(response);
      break;
  }
});

server.listen(PORT, () => {
  console.log("Server running at: ", `http://localhost:${PORT}`);
});
