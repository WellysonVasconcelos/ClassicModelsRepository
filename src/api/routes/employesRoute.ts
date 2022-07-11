import { Router, NextFunction, Request, Response } from "express";
import * as controller from "../controller/employesController";
import { EmployeCreateValidation, EmployeUpdateValidation } from "../validations/employeValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", EmployeCreateValidation, controller.create);

router.put("/:id", EmployeUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
