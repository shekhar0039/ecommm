const express = require("express");
const router = express.Router();
const { Category } = require("../models/category");
const cloudinary = require("cloudinary").v2;
const pLimit = require("p-limit").default;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// GET all categories
router.get(`/`, async (req, res) => {
    try {
        const categoryList = await Category.find();
        if (!categoryList) {
            return res.status(500).json({ success: false });
        }
        res.send(categoryList);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// POST: Create a new category
router.post("/create", async (req, res) => {
  console.log("Received data:", req.body);  // Log the incoming data

  if (!Array.isArray(req.body.images) || req.body.images.length === 0) {
    return res.status(400).json({ error: "Images must be an array with at least one image" });
  }

  const limit = pLimit(2);
  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      try {
        const result = await cloudinary.uploader.upload(image);
        return result;
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        throw uploadError;  // Re-throw the error to catch it in the try-catch below
      }
    });
  });

  let uploadStatus;
  try {
    uploadStatus = await Promise.all(imagesToUpload);
  } catch (error) {
    console.error("Image upload failed:", error);
    return res.status(500).json({
      error: "Image upload failed",
      status: false,
    });
  }

  const imgUrl = uploadStatus.map((item) => item.secure_url);

  let category = new Category({
    name: req.body.name,
    images: imgUrl,
    color: req.body.color,
  });

  try {
    category = await category.save();
    console.log("Category saved to database:", category);  // Log the saved category
    res.status(201).json(category);
  } catch (error) {
    console.error("Failed to save category:", error);  // Log the error
    res.status(500).json({ error: "Failed to save category", status: false });
  }
});


module.exports = router;
