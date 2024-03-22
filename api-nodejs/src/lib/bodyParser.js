function bodyParser(request) {
 return new Promise((resolve, reject) => {
    let data = "";
    request
      .on("data", (chunk) => {
        data += chunk;
      })
      .on("end", () => {
        request.body = JSON.parse(data);
        resolve();
      })
      .on("error", (err) => {
        console.error(err);
        reject();
      });
  });
}

module.exports = { bodyParser };

