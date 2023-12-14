import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Button, FormControl, FormErrorMessage, FormLabel, Input, VStack, Flex, Text } from '@chakra-ui/react';
import { getTaskById, updateTask } from '../../api';

const EditTaskForm: React.FC = () => {
  const { id } = useParams<TaskIdParams>();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isTaskUpdated, setIsTaskUpdated] = useState(false);

  useEffect(() => {
    // Fetch the task details
    const fetchTask = async () => {
      try {
        if (id) {
          const task = await getTaskById(id);
          setTaskName(task.name);
          setTaskDescription(task.description);
        } else {
          setError(`No record found with id=${id}`);
        }
      } catch (error) {
        setError('An error occurred while fetching the task details.');
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setError('');

    try {
      if (id) {
        await updateTask(id, {
          name: taskName,
          description: taskDescription,
        });

        setIsLoading(false);
        setIsTaskUpdated(true);
      } else {
        setError(`No record found with id=${id}`);
      }
    } catch (error) {
      setIsLoading(false);
      setError('An error occurred while updating the task.');
    }
  };

  if (isTaskUpdated) {
    return <Navigate to='/' replace />;
  }

  return (
    <Flex justify='center' minH='100vh' bg='#212121'>
      <Flex direction='column' w='100%' align='center'>
        <Text bgGradient='linear(to-l, #7928CA,#FF0080)' bgClip='text' fontSize='6xl' fontWeight='extrabold'>
          Edit Task
        </Text>
        <form style={{ width: '80%' }} onSubmit={handleSubmit}>
          <VStack spacing={4} align='stretch'>
            <FormControl color='white' id='taskName' isRequired>
              <FormLabel color='white'>Task Name</FormLabel>
              <Input type='text' value={taskName} onChange={(event) => setTaskName(event.target.value)} />
            </FormControl>

            <FormControl color='white' id='taskDescription' isRequired>
              <FormLabel color='white'>Task Description</FormLabel>
              <Input type='text' value={taskDescription} onChange={(event) => setTaskDescription(event.target.value)} />
            </FormControl>

            {error && <FormErrorMessage>{error}</FormErrorMessage>}

            <Button type='submit' colorScheme='blue' isLoading={isLoading}>
              Update Task
            </Button>
          </VStack>
        </form>
      </Flex>
    </Flex>
  );
};

export default EditTaskForm;
