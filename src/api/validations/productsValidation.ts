import { celebrate, Joi, Segments } from "celebrate";

export const productsCreateValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    productCode: Joi.string().required(),
    productName: Joi.string().required(),
    productScale: Joi.string().required(),
    productVendor: Joi.string().required(),
    productDescription: Joi.string().required(),
    quantityInStock: Joi.string().required(),
    buyPrice: Joi.string().required(),
    MSRP: Joi.string().required(),
  }),
});

export const productsUpdateValidation = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      productLine: Joi.string(),
      productName: Joi.string(),
      productScale: Joi.string(),
      productVendor: Joi.string(),
      productDescription: Joi.string(),
      quantityInStock: Joi.string(),
      buyPrice: Joi.string(),
      MSRP: Joi.string(),
    })
    .min(1),
});
