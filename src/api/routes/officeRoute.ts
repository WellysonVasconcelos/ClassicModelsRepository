import { Router, NextFunction, Request, Response } from "express";
import * as controller from "../controller/office.controller";
import { officeCreateValidation, officeUpdateValidation } from "../validations/officeValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", officeCreateValidation, controller.create);

router.put("/:id", officeUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
