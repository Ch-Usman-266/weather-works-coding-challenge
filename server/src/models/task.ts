'use strict';
import { Model, InferAttributes, InferCreationAttributes, Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {}
  Task.init(
    {
      name: dataTypes.STRING,
      description: dataTypes.STRING,
      completed: dataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Task',
    },
  );
  return Task;
};
