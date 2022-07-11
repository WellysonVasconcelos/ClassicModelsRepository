import { Router, NextFunction, Request, Response } from "express";
import * as controller from "../controller/productLineController";
import {productLineCreateValidation,productLineUpdateValidation } from "../validations/productLineValidations";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/",productLineCreateValidation, controller.create);

router.put("/:id",productLineUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
