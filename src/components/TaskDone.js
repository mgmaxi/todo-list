import React from 'react';
import { DeleteIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  List,
  ListItem,
  ListIcon,
  IconButton,
  Divider,
  Checkbox,
} from '@chakra-ui/react';

const TaskDone = ({ tasks, onTaskDelete, onToggleTaskDone }) => {
  return (
    <>
      <div className="container">
        <h2 className="section">
          Tasks done: {tasks.filter((task) => task.done === true).length}
        </h2>
      </div>
      <Divider />

      <List>
        {tasks.map((task) =>
          task.done === true ? (
            <ListItem key={task.id} className="task">
              <ListIcon as={ChevronRightIcon} />
              <p className="strikethrough">{task.name}</p>
              <Checkbox
                type="checkbox"
                checked={task.done}
                onChange={() => onToggleTaskDone(task)}
                colorScheme="green"
                defaultChecked
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

export default TaskDone;
