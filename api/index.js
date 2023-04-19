const server = require("./src/app.js");
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log("Server on port", port);
});
