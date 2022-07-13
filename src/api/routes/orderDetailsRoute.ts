import { Router, NextFunction, Request, Response } from "express";
import * as controller from "../controller/orderDetailsController";
import {orderDetailsCreateValidation,orderDetailsUpdateValidation } from "../validations/orderDetailsValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/",orderDetailsCreateValidation, controller.create);

router.put("/:id",orderDetailsUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
