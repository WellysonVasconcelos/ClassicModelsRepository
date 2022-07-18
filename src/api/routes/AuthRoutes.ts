import {Router} from 'express';
import * as controller from "../controller/AuthController"
import { AuthSingValidation } from '../validations/authValidation';

const router = Router();

router.post("/singup", AuthSingValidation, controller.singUp);
router.post("/singin", AuthSingValidation, controller.singIn)
export default router;