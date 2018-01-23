"use strict";
const express = require("express");
const path = require("path");

const app = express();
app.set("ip", process.env.IP || "0.0.0.0");
app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), app.get("ip"), () => {
  console.log(`Server running at: ${app.get("ip")}:${app.get("port")}`);
});
