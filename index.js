const usersRoute = require("./routes/user.route");
const express = require("express");
const app = express();
require('dotenv').config();
const connectWithDb = require("./db/connectWithDb");

(async () => {

if (!process.env.SECRET) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

await connectWithDb();

app.use(express.json());

app.use("/api/users", usersRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
})();
