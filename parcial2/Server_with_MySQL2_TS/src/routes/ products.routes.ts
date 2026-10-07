import { Router } from "express";

import { ProductsController } from "../controllers/products.controller.ts";

const router = Router();
const productsController = new ProductsController();

router.get("/getAll", productsController.getAll);
router.get("/getById/:id", productsController.getById);
router.get("/create", productsController.create);
router.get("/update/:id", productsController.update);
router.get("/delete/:id", productsController.delete);
router.get("/chancePrice/:id", productsController.changePrice);

export default router;