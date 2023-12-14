import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button, FormControl, FormErrorMessage, FormLabel, Input, VStack, Flex, Text } from '@chakra-ui/react';
import { createTask } from '../../api';

const CreateTaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isTaskCreated, setIsTaskCreated] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setError('');

    try {
      await createTask({
        name: taskName,
        description: taskDescription,
      });

      setIsLoading(false);
      setTaskName('');
      setTaskDescription('');
      setIsTaskCreated(true);
    } catch (error) {
      setIsLoading(false);
      setError('An error occurred while creating the task.');
    }
  };

  if (isTaskCreated) {
    return <Navigate to='/' replace />;
  }

  return (
    <Flex justify='center' minH='100vh' bg='#212121'>
      <Flex direction='column' w='100%' align='center'>
        <Text bgGradient='linear(to-l, #7928CA,#FF0080)' bgClip='text' fontSize='6xl' fontWeight='extrabold'>
          Create New Task
        </Text>
        <form style={{ width: '80%' }} onSubmit={handleSubmit}>
          <VStack spacing={4} align='stretch'>
            <FormControl color='white' id='taskName' isRequired>
              <FormLabel color='white'> Task Name</FormLabel>
              <Input type='text' value={taskName} onChange={(event) => setTaskName(event.target.value)} />
            </FormControl>

            <FormControl color='white' id='taskDescription' isRequired>
              <FormLabel color='white'>Task Description</FormLabel>
              <Input type='text' value={taskDescription} onChange={(event) => setTaskDescription(event.target.value)} />
            </FormControl>

            {error && <FormErrorMessage>{error}</FormErrorMessage>}

            <Button type='submit' colorScheme='blue' isLoading={isLoading}>
              Create Task
            </Button>
          </VStack>
        </form>
      </Flex>
    </Flex>
  );
};

export default CreateTaskForm;
