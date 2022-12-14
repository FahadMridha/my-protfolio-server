const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const projects = require("./data/projects.json");

app.get("/", (req, res) => {
  res.send("project server in running");
});
app.get("/projects", (req, res) => {
  res.send(projects);
});

app.get("/projects/:id", (req, res) => {
  const id = req.params.id;

  const project = projects.find((project) => project.id === id);
  res.send(project);
});

app.listen(port, () => {
  console.log(` Server port on  running ${port}`);
});
