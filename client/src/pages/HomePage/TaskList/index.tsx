import React, { useState, useEffect } from 'react';
import { Alert, AlertIcon, VStack } from '@chakra-ui/react';
import TaskCard from '../TaskCard';
import { getAllTasks } from '../../../api';

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allTasks = await getAllTasks();
        setTasks(allTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, []);

  if (tasks.length === 0) {
    return (
      <Alert status='warning' variant='solid'>
        <AlertIcon />
        Seems like you have run out of tasks today
      </Alert>
    );
  }

  return (
    <VStack p={4} w='50%' align='stretch'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </VStack>
  );
};

export default TaskList;
