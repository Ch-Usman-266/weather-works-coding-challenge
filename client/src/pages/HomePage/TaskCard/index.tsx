import React from 'react';
import { Card, Box, Button, Text, Tag, Flex } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { deleteTask, updateTask } from '../../../api';

const TaskCard = ({ task }: TaskCardProps) => {
  const navigate = useNavigate();

  const handleTaskDelete = async (id: number) => {
    await deleteTask(id);
    window.location.reload();
  };

  const handleCompleteTask = async (id: number) => {
    await updateTask(id, { completed: true });
    window.location.reload();
  };

  return (
    <Card p={4} borderWidth='1px' borderRadius='md' bg='#111'>
      <Flex align='center' justify='space-between'>
        <Box>
          <Text fontWeight='bold' fontSize='3xl' mb={2} color='tomato'>
            {task.name}
          </Text>
          <Text color='whiteAlpha.700'>{task.description}</Text>
          <Box mt={4}>
            <Button
              leftIcon={<EditIcon />}
              colorScheme='teal'
              variant='solid'
              mr={2}
              onClick={() => navigate(`/edit/${task.id}`)}
            >
              Edit
            </Button>
            {!task.completed && (
              <Button
                leftIcon={<CheckIcon />}
                colorScheme='blue'
                variant='solid'
                mr={2}
                onClick={() => handleCompleteTask(task.id)}
              >
                Complete Task
              </Button>
            )}
            <Button
              leftIcon={<DeleteIcon />}
              colorScheme='red'
              variant='solid'
              onClick={() => handleTaskDelete(task.id)}
            >
              Delete
            </Button>
          </Box>
        </Box>
        <Tag size='lg' colorScheme={task.completed ? 'green' : 'yellow'} mb={2}>
          {task.completed ? 'Completed' : 'Pending'}
        </Tag>
      </Flex>
    </Card>
  );
};

export default TaskCard;
