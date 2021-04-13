import React, { useState } from 'react';

import Title from './Title';
import AddTaskBar from './AddTaskBar';
// import TaskTable from './TaskTable';
import TaskRow from './TaskRow';

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


  function generateId() {
    return Math.random().toString(36).substring(2);
  }

  const handleAddTask = function(e) {
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
      <AddTaskBar value={text} change={handleChange} keyPress={handleAddTask}  />
      <table>
        <tbody>
          {
            tasks.map(task => (
              <TaskRow key={task.id} name={task.name} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Todo;