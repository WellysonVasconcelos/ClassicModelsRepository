import { celebrate, Joi, Segments } from "celebrate";

export const orderDetailsCreateValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    orderNumber: Joi.string().required(),
    orderDate: Joi.string().required(),
    requiredDate: Joi.string().required(),
    shippedDate: Joi.string().required(),
    status: Joi.string().required(),
    comments: Joi.string().required(),
  }),
});

export const orderDetailsUpdateValidation = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      orderNumber: Joi.string(),
      orderDate: Joi.string(),
      requiredDate: Joi.string(),
      shippedDate: Joi.string(),
      status: Joi.string(),
      comments: Joi.string(),
    })
    .min(1),
});
