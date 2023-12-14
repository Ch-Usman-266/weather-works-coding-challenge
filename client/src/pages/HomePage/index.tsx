import React, { useState } from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';
import TaskList from './TaskList';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Flex justify='center' minH='100vh' bg='#212121'>
      <Flex direction='column' w='100%' align='center'>
        <Text bgGradient='linear(to-l, #7928CA,#FF0080)' bgClip='text' fontSize='6xl' fontWeight='extrabold'>
          Todo App
        </Text>
        <TaskList />
        <Button onClick={() => navigate('/new')} size='lg' fontSize='xl' colorScheme='blue'>
          <Text fontWeight='bold'>Click here to add an item</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default HomePage;
