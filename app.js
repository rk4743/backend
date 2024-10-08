const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const app = express();

app.use(bodyParser.json());
app.use("/bfhl", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
