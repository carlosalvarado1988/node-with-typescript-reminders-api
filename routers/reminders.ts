import { Router } from "express";
const router = Router();

interface CreateRemidnerDto {
  title: string;
}

router.get("/", (req, res) => {
  res.send("List of reminders");
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateRemidnerDto;
  res.send(title);
});

export default router;
