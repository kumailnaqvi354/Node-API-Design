import { Router } from "express";

const router = Router();

/**
 * Product
 */

router.get("/product", (req, res) => {
  res.json({ message: "Hello" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.post("/product/", () => {});
router.delete("/product/:id", () => {});

/**
 * Update
 */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update/", () => {});
router.delete("/update/:id", () => {});

/**
 * Update Points
 */

router.get("/updatepoints", () => {});
router.get("/updatepoints/:id", () => {});
router.put("/updatepoints/:id", () => {});
router.post("/updatepoints/", () => {});
router.delete("/updatepoints/:id", () => {});

export default router;
