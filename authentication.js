import db from "./db.js";

// REGISTER
export const register = (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err) => {
    if (err) {
      return res.status(400).json({ message: "User already exists" });
    }
    res.json({ message: "Registered successfully" });
  });
};

// LOGIN
export const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    }

    //  Email not found
    if (result.length === 0) {
      return res.status(404).json({
        message: "EMAIL_NOT_FOUND"
      });
    }

    const user = result[0];

    // Password incorrect
    if (user.password !== password) {
      return res.status(401).json({
        message: "INVALID_PASSWORD"
      });
    }

    //  Success
    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  });
};
