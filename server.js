import express from "express";
import cors from "cors";
import authRoutes from "./authRoutes.js";
import subscriptionRoutes from "./subscriptionRoutes.js";

const app = express();


app.use(cors({
  origin: "https://gamezone-frontend-emgb.onrender.com",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/subscription", subscriptionRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

