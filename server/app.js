const express = require("express");
const todosRoutes = require("./routes/todo");
require("./db/todo");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use("/todo", todosRoutes);

app.listen(PORT, (req, res) => {
  console.log("Connected");
});
