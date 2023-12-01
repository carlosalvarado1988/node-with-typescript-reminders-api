import { Router } from "express";
import CreateReminderDto from "../models/reminder";

const router = Router();

router.get("/", (req, res) => {
  res.send("List of reminders");
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  res.send(title);
});

export default router;
