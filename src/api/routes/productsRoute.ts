import { Router} from "express";
import * as controller from "../controller/productsController";
import {productsCreateValidation,productsUpdateValidation } from "../validations/productsValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/",productsCreateValidation, controller.create);

router.put("/:id",productsUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
