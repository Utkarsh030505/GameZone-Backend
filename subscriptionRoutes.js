import express from "express";
import db from "./db.js";

const router = express.Router();

// Save subscription details
router.post("/subscribe", (req, res) => {
  const { user_id, plan, amount } = req.body;

  const sql = "INSERT INTO subscriptions (user_id, plan, amount) VALUES (?, ?, ?)";
  db.query(sql, [user_id, plan, amount], (err) => {
    if (err) return res.status(400).json({ message: "Error saving subscription" });

    res.json({ message: "Subscription successful" });
  });
});

export default router;
