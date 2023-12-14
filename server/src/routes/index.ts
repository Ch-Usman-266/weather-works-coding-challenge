import { Router } from 'express';
import { validate } from 'express-validation';
import * as taskController from '../controllers';
import * as taskValidationSchema from '../validations';

const router = Router();

router
  .route('/tasks')
  .get(validate(taskValidationSchema.getTasksSchema, { keyByField: true }), taskController.getAllTasks)
  .post(validate(taskValidationSchema.createTaskSchema, { keyByField: true }), taskController.createTask);

router
  .route('/tasks/:id')
  .get(validate(taskValidationSchema.getTaskByIdSchema, { keyByField: true }), taskController.getATask)
  .patch(validate(taskValidationSchema.updateTaskSchema, { keyByField: true }), taskController.updateTask)
  .delete(validate(taskValidationSchema.deleteTaskByIdSchema, { keyByField: true }), taskController.deleteTask);

export default router;
