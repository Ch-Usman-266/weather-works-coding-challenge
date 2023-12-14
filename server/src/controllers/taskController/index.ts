import { Request, Response } from 'express';
import db from '../../models';

const { Task } = db;

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  const tasks = await Task.findAll();
  res.status(200).json(tasks);
};

export const getATask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const task = await Task.findByPk(id);

    if (!task) {
      res.status(404).json({ error: `No task was found with id=${id}` });
      return;
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedTask = await Task.update(req.body, { where: { id } });
    if (updatedTask[0] === 0) {
      res.status(404).json({ error: `No task was found with id=${id}` });
    } else {
      res.status(200).json({ message: 'Task updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const deletedTaskCount = await Task.destroy({ where: { id } });
    if (deletedTaskCount === 0) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.status(200).json({ message: 'Task deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
