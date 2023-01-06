let express = require("express");
let router = express.Router();
let authController = require("../controllers/authController");
let merchantController = require("../controllers/merchantController");
let productController = require("../controllers/productController");

//-- Login
router.post("/login", authController.login);

//-- Merchant
router.get("/merchant", merchantController.getMerchant);
router.get("/merchant/:id", merchantController.getMerchantById);
router.post("/merchant", merchantController.createMerchant);
router.put("/merchant/:id", merchantController.updateMerchant);
router.delete("/merchant/:id", merchantController.deleteMerchant);

//-- Products
router.get("/product", productController.getProduct);
router.get("/product/:id", productController.getProductById);
router.post("/product", productController.createProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
