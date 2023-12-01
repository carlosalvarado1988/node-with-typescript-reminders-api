import express from "express";

import reminderRouter from "./routers/reminders";

const port = 8000;
const app = express();

// middleware
app.use(express.json());

// routers
app.use("/reminders", reminderRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log(`Server Started in port ${port}`));
