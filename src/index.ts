import "./extensions";

import express from "express";
import { body, validationResult } from "express-validator";

const app = express();
app.use(express.json());

const port = 8080;

app.post("/", body("token").isToken({ length: 3 }), (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    res.send("body has indeed a valid token!");
  } else {
    res.status(400).send(errors.array());
  }
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
