import { Router, NextFunction, Request, Response } from "express";
import * as controller from "../controller/paymentsController";
import {paymentsCreateValidation,paymentsUpdateValidation } from "../validations/paymentsValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/",paymentsCreateValidation, controller.create);

router.put("/:id",paymentsUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
