import { celebrate, Joi, Segments } from "celebrate";

export const productLineCreateValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    productLine: Joi.string().required(),
    textDescription: Joi.string().required(),
    htmlDescription: Joi.string().required(),
    image: Joi.string().required(),
  }),
});

export const productLineUpdateValidation = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      productLine: Joi.string(),
      textDescription: Joi.string(),
      htmlDescription: Joi.string(),
      image: Joi.string(),
    })
    .min(1),
});
