import { Router, NextFunction, Request, Response } from "express";
import * as controller from "../controller/customerController";
import { CustomerCreateValidation, CustomerUpdateValidation } from "../validations/customerValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", CustomerCreateValidation, controller.create);

router.put("/:id", CustomerUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
