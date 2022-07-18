import { celebrate, Joi, Segments } from "celebrate";

export const AuthSingValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});
