import axios, { AxiosResponse, AxiosError } from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getAllTasks = async (): Promise<Task[]> => {
  try {
    const response: AxiosResponse<Task[]> = await api.get('/tasks');
    return response.data;
  } catch (error) {
    handleRequestError(error as AxiosError<unknown>);
    throw error;
  }
};

export const createTask = async (taskData: CreateTaskProps): Promise<Task> => {
  try {
    const response: AxiosResponse<Task> = await api.post('/tasks', { ...taskData, completed: false });
    return response.data;
  } catch (error) {
    handleRequestError(error as AxiosError<unknown>);
    throw error;
  }
};

export const getTaskById = async (id: string | number): Promise<Task> => {
  try {
    const response: AxiosResponse<Task> = await api.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    handleRequestError(error as AxiosError<unknown>);
    throw error;
  }
};

export const updateTask = async (id: string | number, taskData: UpdateTaskProps): Promise<Task> => {
  try {
    const response: AxiosResponse<Task> = await api.patch(`/tasks/${id}`, taskData);
    return response.data;
  } catch (error) {
    handleRequestError(error as AxiosError<unknown>);
    throw error;
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    await api.delete(`/tasks/${id}`);
  } catch (error) {
    handleRequestError(error as AxiosError<unknown>);
    throw error;
  }
};

const handleRequestError = (error: AxiosError<any>) => {
  if (error.response) {
    console.error('Request Error:', error.response.status, error.response.data);
  } else if (error.request) {
    console.error('Request Error:', error.request);
  } else {
    console.error('Request Error:', error.message);
  }
};
