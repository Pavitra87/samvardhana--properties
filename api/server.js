const express = require("express");
const { connectDB } = require("./db/db");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());

//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ===== Serve UI =====
app.use("/ui", express.static(path.join(__dirname, "ui", "build")));

app.get("/ui/*", (req, res) => {
  res.sendFile(path.join(__dirname, "ui", "build", "index.html"));
});

// ===== Serve Admin Panel =====
app.use(
  "/admin-panel",
  express.static(path.join(__dirname, "admin-panel", "build"))
);

app.get("/admin-panel/*", (req, res) => {
  res.sendFile(path.join(__dirname, "admin-panel", "build", "index.html"));
});

//uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// api.use('/api/home',require('./routes/homeRoutes'))

//blogroutes
app.use("/api/blog", require("./routes/blogRoutes/blogRoutes"));

//feqroutes
app.use("/api/faqs", require("./routes/faqRoutes/faqRoutes"));

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
