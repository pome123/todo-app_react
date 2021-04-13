import React, { useState } from 'react';

// import TaskRow from './TaskRow';
import Button from './Button';


function TaskTable(props) {
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
        {tasks.map(task => (
          <tr>
            <td>
              <input className="task" type="text" value={task.name} disabled />
              <Button value="Edit" />
              <Button value="Delete" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;