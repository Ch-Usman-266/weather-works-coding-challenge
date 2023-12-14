import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation';

export const validationErrorHandler = (
  err: any,
  _: Request,
  res: Response,
  next: NextFunction,
): Response<any> | void => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  next();
  return res.status(500).json(err);
};

export const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({ error: 'Route not found' });
};
