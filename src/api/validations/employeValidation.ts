import { celebrate, Joi, Segments } from "celebrate";

export const EmployeCreateValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    employeeNumber: Joi.number().required(),
    lastName: Joi.string().required(),
    firstName: Joi.string().required(),
    extension: Joi.string().required(),
    email: Joi.string().required(),
    officeCode: Joi.string().required(),
    reportsTo: Joi.string().required(),
    jobTitle: Joi.string().required(),
  }),
});

export const EmployeUpdateValidation = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      employeeNumber: Joi.number(),
      lastName: Joi.string(),
      firstName: Joi.string(),
      extension: Joi.string(),
      email: Joi.string(),
      officeCode: Joi.string(),
      reportsTo: Joi.string(),
      jobTitle: Joi.string(),
    })
    .min(1),
});
