const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");
const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
app.listen(5000, () => console.log("Up & Running"));
