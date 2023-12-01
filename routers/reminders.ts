import { Router } from "express";
import CreateReminderDto from "../dtos/reminder";
import Reminder from "../models/reminder";

const router = Router();

// Mock DB. array of reminders
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);

  // save to a DB.
  reminders.push(reminder);
  res.status(201).json(reminders);
});

export default router;
