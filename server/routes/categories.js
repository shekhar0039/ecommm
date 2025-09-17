const express = require("express");
const router = express.Router();
const { Category } = require("../models/category");
const cloudinary = require("cloudinary").v2;
const pLimit = require("p-limit").default;
const axios = require("axios");

// ===================== Cloudinary Config =====================
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// ===================== Helper: Upload Image =====================
async function uploadFromUrl(imageUrl) {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");

    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(buffer);
    });
  } catch (err) {
    throw new Error(`Failed to fetch image: ${err.message}`);
  }
}

// ===================== Routes =====================

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categoryList = await Category.find();
    if (!categoryList) {
      return res.status(500).json({ success: false });
    }
    res.status(200).json(categoryList);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET category by id
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "The category with the given ID was not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE Category
router.post("/", async (req, res) => {
  console.log("📩 Received data:", req.body);

  if (!Array.isArray(req.body.images) || req.body.images.length === 0) {
    return res.status(400).json({ error: "Images must be an array with at least one image" });
  }

  const limit = pLimit(2);
  const imagesToUpload = req.body.images.map((image) =>
    limit(async () => {
      try {
        return await uploadFromUrl(image);
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        throw uploadError;
      }
    })
  );

  let uploadStatus;
  try {
    uploadStatus = await Promise.all(imagesToUpload);
  } catch (error) {
    console.error("Image upload failed:", error);
    return res.status(500).json({
      error: "Image upload failed",
      status: false,
      details: error.message
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
    console.log("✅ Category saved to database:", category);
    res.status(201).json(category);
  } catch (error) {
    console.error("Failed to save category:", error);
    res.status(500).json({ error: "Failed to save category", status: false });
  }
});

// UPDATE Category
router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        images: req.body.images,
        color: req.body.color
      },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category: updatedCategory
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during update"
    });
  }
});

// DELETE Category
router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);

    if (!deletedCategory) {
      return res.status(404).json({
        message: "Category not found!",
        success: false
      });
    }

    res.status(200).json({
      success: true,
      message: "Category Deleted"
    });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during delete"
    });
  }
});

module.exports = router;
