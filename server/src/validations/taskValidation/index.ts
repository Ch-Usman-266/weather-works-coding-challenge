import { Joi } from 'express-validation';

export const getTasksSchema = {
  query: Joi.object().keys(),
};

export const getTaskByIdSchema = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

export const createTaskSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    completed: Joi.boolean().required(),
  }),
};

export const updateTaskSchema = {
  body: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    completed: Joi.boolean(),
  }),
};

export const deleteTaskByIdSchema = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};
