import express from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});

app.get("/", async (req, res) => {
  // const result = await pool.query("SELECT NOW()");
  // res.json(result.rows);
  // res.json("hello world")
  
});

app.listen(4000, () => console.log("Server running on port 4000"));
