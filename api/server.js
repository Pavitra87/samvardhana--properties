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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//about
app.use("/api/about", require("./routes/aboutRoutes/aboutRoutes"));
//blogroutes
app.use("/api/blog", require("./routes/blogRoutes/blogRoutes"));

//feqroutes
app.use("/api/faqs", require("./routes/faqRoutes/faqRoutes"));
//project
app.use("/api/project", require("./routes/projectRoutes/projectRoutes"));



app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
