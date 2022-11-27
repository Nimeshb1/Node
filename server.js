import express from "express";

const app = express();
const PORT = 8000;
app.use(express.json());
import taskRouter from "./src/router/taskRouter.js";

app.use("/api/v1/tasks", taskRouter);
//  handel all uncatch router request
app.use("*", (req, res) => {
  res.status(400).json({
    status: "error",
    message: "404 page not found",
  });
});

// global error handeler
app.use((error, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
