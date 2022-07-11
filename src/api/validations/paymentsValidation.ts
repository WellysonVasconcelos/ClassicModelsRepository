import { celebrate, Joi, Segments } from "celebrate";

export const paymentsCreateValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    customerNumber: Joi.string().required(),
    checkNumber: Joi.string().required(),
    paymentDate: Joi.string().required(),
    amount: Joi.string().required(),
  }),
});

export const paymentsUpdateValidation = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      customerNumber: Joi.string(),
      checkNumber: Joi.string(),
      paymentDate: Joi.string(),
      amount: Joi.string(),
    })
    .min(1),
});
