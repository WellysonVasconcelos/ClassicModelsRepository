import { Request, Response } from "express";
import * as service from "../../services/AuthService";

export const singUp = async (req: Request, res: Response) => {
  res.send(await service.singUp(req.body));
};
export const singIn = async (req: Request, res: Response) => {
  res.send(await service.singIn(req.body));
};
