const app = require("./app");
const config = require("./config/config");

const PORT = config.app.port;
const db = config.db.url;

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT} with ${db} `);
});