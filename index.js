import express from "express";
import path from "path";
import api from "./routes/api/index";
import oauth from "./routes/oauth/index";

const app = express();

app.use("/api", api);
app.use("/oauth", oauth);

// Serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`API listening on port ${port}`);
