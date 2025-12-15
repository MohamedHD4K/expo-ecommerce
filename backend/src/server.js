import express from "express";
import path from "path";
import { ENV } from "./config/env.js";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

const app = express();

const __dirname = path.resolve();

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin/dist/index.html"));
  });
}

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.listen(ENV.PORT, () => {
  console.log(`Server is running on http://${ENV.HOST}:${ENV.PORT}/api/health`);
});
