import { Router } from "express";
import { body, oneOf } from "express-validator";
import { handlerInputError } from "./modules/middleware";

const router = Router();

/**
 * Product
 */

router.get("/product", (req, res) => {
  res.json({ message: "Hello" });
});
router.get("/product/:id", () => {});

router.put(
  "/product/:id",
  body("name").isString(),
  handlerInputError,
  (req, res) => {}
);
router.post(
  "/product/",
  body("name").isString(),
  handlerInputError,
  (req, res) => {}
);
router.delete("/product/:id", () => {});

/**
 * Update
 */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
                //Both ways can be used to validate the inputs specific to schema
  // oneOf([body("IN_PROGRESS"), body("SHIPPED"), body("DEPRECATED")]), 
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  () => {}
);
router.post(
  "/update/",
  body("title").exists().isString(),
  body("body").optional(),
  () => {}
);
router.delete("/update/:id", () => {});

/**
 * Update Points
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {}
);
router.post(
  "/updatepoint/",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  (req, res) => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
