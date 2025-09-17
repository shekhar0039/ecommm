const express = require("express");
const router = express.Router();
const { Category } = require("../models/category.js");
const { Product } = require("../models/products.js");
const cloudinary = require("cloudinary").v2;
const pLimit = require("p-limit").default;

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ GET: All products with populated category
router.get("/", async (req, res) => {
  try {
    const productList = await Product.find().populate("category");
    if (!productList) {
      return res.status(500).json({ success: false });
    }
    res.status(200).json(productList);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ POST: Create product with image uploads
router.post("/create", async (req, res) => {
  try {
    const category = await Category.findById(req.body.category);
    if (!category) {
      return res.status(404).json({ message: "Invalid Category!" });
    }

    if (!Array.isArray(req.body.images) || req.body.images.length === 0) {
      return res.status(400).json({ error: "Images must be an array with at least one image" });
    }

    const limit = pLimit(2);
    const imagesToUpload = req.body.images.map((image) =>
      limit(async () => {
        const result = await cloudinary.uploader.upload(image);
        return result.secure_url;
      })
    );

    let uploadedImages;
    try {
      uploadedImages = await Promise.all(imagesToUpload);
    } catch (error) {
      console.error("Image upload error:", error);
      return res.status(500).json({ error: "Image upload failed" });
    }

    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      images: uploadedImages,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ GET: Get product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      return res.status(404).json({ message: "The product with the given ID was not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ PUT: Update product
router.put("/:id", async (req, res) => {
  try {
    if (req.body.category) {
      const category = await Category.findById(req.body.category);
      if (!category) {
        return res.status(400).json({ message: "Invalid category ID" });
      }
    }

    let uploadedImages = [];
    if (Array.isArray(req.body.images) && req.body.images.length > 0) {
      const limit = pLimit(2);
      const imagesToUpload = req.body.images.map((image) =>
        limit(async () => {
          const result = await cloudinary.uploader.upload(image);
          return result.secure_url;
        })
      );

      try {
        uploadedImages = await Promise.all(imagesToUpload);
      } catch (error) {
        console.error("Image upload error:", error);
        return res.status(500).json({ error: "Image upload failed" });
      }
    }

    const updatedFields = {
      name: req.body.name,
      description: req.body.description,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
    };

    if (uploadedImages.length > 0) {
      updatedFields.images = uploadedImages;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, message: "Product updated", product: updatedProduct });
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ DELETE: Product
router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deleteProduct) {
      return res.status(404).json({
        message: "Product not found!",
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted",
    });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({
      success: false,
      message: "Server error during delete",
    });
  }
});

module.exports = router;
