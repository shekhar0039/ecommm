const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const categoryRoutes = require("./routes/categories");
const productRoutes = require("./routes/products");
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);


// DB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas!");
    const PORT = process.env.PORT || 5001; // run backend on 5001
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
