interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
}

interface TaskListProps {
  tasks: Task[];
}

interface CreateTaskProps {
  name: string;
  description: string;
}

interface TaskIdParams {
  id: string;
  [key: string]: string | undefined;
}

interface UpdateTaskProps {
  name?: string;
  description?: string;
  completed?: boolean;
}
