import * as url from 'url';
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import express from "express";
const app = express.Router();

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "sites/index.html"));
});

const serverModule = {
  router: app
};

export default serverModule;
