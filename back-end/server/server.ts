import express, { Application, Request, Response } from "express";
import path from "path";

const app: Application = express();

app.use(express.static(path.join(__dirname, "../../client/public")));







app.listen(5000, () => console.log("listening on port 5000"));