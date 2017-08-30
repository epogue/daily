import { Router } from "express";
let router = Router();

router.get("/test", (req, res) => {
  res.json({ message: "Hello" });
});

export default router;
