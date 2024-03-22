const url = require("url");

const {
  getTasks,
  createTasks,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

const routesTasks = async (req, res) => {
  const { path } = url.parse(req.url, true);
  const params = path.split("/");

  if (params[1] == "tasks") {
    if (
      (typeof params[2] === "undefined" || params[2] =="") &&
      (req.method == "PUT" || req.method == "DELETE")
    ) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify([{ "error": true, "msg": "Tiene que pasar el parametro" }])
        );
        res.end();
        return;
      }

    res.writeHead(200, { "Content-Type": "application/json" });
    switch (req.method) {
      case "GET":
        res.write(JSON.stringify(await getTasks()));
        res.end();
        break;
      case "POST":
        res.write(JSON.stringify(await createTasks(req)));
        res.end();
        break;
      case "PUT":
        res.write(JSON.stringify(await updateTask(req, params[2])));
        res.end();
        break;
      case "DELETE":
        res.write(JSON.stringify(await deleteTask(params[2])));
        res.end();
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};

module.exports = { routesTasks };

