import { celebrate, Joi, Segments } from "celebrate";

export const CustomerCreateValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    customerNumber: Joi.number().required(),
    customerName: Joi.string().required(),
    contactLastName: Joi.string().required(),
    contactFirstName: Joi.string().required(),
    phone: Joi.string().required(),
    addressLine1: Joi.string().required(),
    addressLine2: Joi.string().allow(null),
    city: Joi.string().required(),
    state: Joi.string().allow(null),
    postalCode: Joi.string().required(),
    country: Joi.string().required(),
    SalesRepEmployeeNumber: Joi.string().required(),
    creditLimit: Joi.number().required(),
  }),
});

export const CustomerUpdateValidation = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      customerNumber: Joi.number(),
      customerName: Joi.string(),
      contactLastName: Joi.string(),
      contactFirstName: Joi.string(),
      phone: Joi.string(),
      addressLine1: Joi.string(),
      addressLine2: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      postalCode: Joi.string(),
      country: Joi.string(),
      SalesRepEmployeeNumber: Joi.string(),
      creditLimit: Joi.number(),
    })
    .min(1),
});
