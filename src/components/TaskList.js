import React from 'react';
import {
  List,
  ListItem,
  ListIcon,
  Divider,
  IconButton,
  Checkbox,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FiChevronRight } from 'react-icons/fi';

const TaskList = ({ tasks, onTaskDelete, onToggleTaskDone }) => {
  return (
    <>
      <div className="container">
        <h2 className="section">
          Tasks to do: {tasks.filter((task) => task.done === false).length}
        </h2>
      </div>
      <Divider />

      <List spacing={3}>
        {tasks.map((task) =>
          task.done === false ? (
            <ListItem key={task.id} className="task">
              <ListIcon as={FiChevronRight} />
              <p>{task.name}</p>
              <Checkbox
                type="checkbox"
                checked={task.done}
                onChange={() => onToggleTaskDone(task)}
                size="lg"
                className="checkbox"
              ></Checkbox>
              <IconButton
                onClick={() => onTaskDelete(task)}
                className="delete-btn"
                aria-label="Search database"
                icon={<DeleteIcon />}
              />
            </ListItem>
          ) : (
            ''
          )
        )}
      </List>
    </>
  );
};

export default TaskList;
