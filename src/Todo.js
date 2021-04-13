import React, { useState } from 'react';

import Title from './Title';
import AddTaskBar from './AddTaskBar';
import TaskTable from './TaskTable';
import TaskRow from './TaskRow';
import Button from './Button';

import generateId from './generateId';


function Todo() {
  const [tasks, setTask] = useState([
    {
      id: "rfiho6voxf",
      name: 'Walk the dog',
      complete: false,
    },
    {
      id: "yxfpdj9fbj",
      name: 'Wash the car',
      complete: false,
    },
    {
      id: "oscutvkozp",
      name: 'Go to the gym',
      complete: true,
    }
  ]);
  const [text, setText] = useState('');

  const handleChange = function(e) {
    setText(e.target.value);
  }

  const AddTask = function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (text === '') {
        return;
      }
      
      setTask([
        ...tasks,
        {
          id: generateId(),
          name: text,
          complete: false,
        }
      ]);

      setText('');
    }
  }

  return (
    <div className="Todo">
      <Title />
      <AddTaskBar value={text} change={handleChange} keyPress={AddTask}  />
      <TaskTable>
        {
          tasks.map(task => (
            <tr key={task.id}>
              <td>
                <TaskRow name={task.name} />
                <Button button="Edit" />
                <Button button="Delete" /> 
              </td>
            </tr>
          ))
        }
      </TaskTable>
    </div>
  );
}

export default Todo;