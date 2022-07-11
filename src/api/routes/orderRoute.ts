import { Router, NextFunction, Request, Response } from "express";
import * as controller from "../controller/orderController";
import {orderCreateValidation,orderUpdateValidation } from "../validations/orderValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/",orderCreateValidation, controller.create);

router.put("/:id",orderUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
