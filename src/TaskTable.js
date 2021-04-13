import React, { useState } from 'react';

import TaskRow from './TaskRow';


function TaskTable() {
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

  return (
    <table>
      <tbody>
        {
          tasks.map(task => (
            <TaskRow key={task.id} name={task.name} />
          ))
        }
      </tbody>
    </table>
  );
}

export default TaskTable;