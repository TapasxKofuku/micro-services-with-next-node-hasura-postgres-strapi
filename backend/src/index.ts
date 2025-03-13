import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express and ESM!");
});

app.listen(PORT, () => {
  console.log(`⚡ Server is running at http://localhost:${PORT}`);
});
