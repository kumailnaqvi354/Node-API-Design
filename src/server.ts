import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/user";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.shhhh_secret = "doggy";
  next();
});

app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error(" hello"));
  }, 1);
});

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signIn);

app.use((err, req, res, next) => {
  if (err.type == "auth") {
    res.status(401);
    res.json({ message: "unauthorized" });
  } else if (err.type == "input") {
    res.status(400);
    res.json({ message: "Invalid input " });
  } else {
    res.status(500);
    res.json({ message: "oops, thats on our end" });
  }
});

export default app;
