const http = require("http");
const { routesTasks } = require("./src/routes/route");

const server = http.createServer((req, res) => {
  try {
    routesTasks(req, res);
  } catch (error) {
    console.error(error);
  }
});

server.listen(3000, () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});


