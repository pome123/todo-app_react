import React, { useState } from 'react';

import Title from './Title';
import AddTaskBar from './AddTaskBar';
import TaskTable from './TaskTable';
import TaskRow from './TaskRow';

import generateId from './generateId';

// import './Todo.css';


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

  const AddTask = function(text) {
    setTask([
      ...tasks,
      {
        id: generateId(),
        name: text,
        complete: false,
      }
    ]);
  }

  const completedTask = function (id) {
    const allTask = [...tasks];
    tasks.map((task) => {
      if (task.id === id) {
        return task.complete ? task.complete = false : task.complete = true;
      }
    });
    setTask(allTask);
  }

  const deleteTask = function (id) {
    let index;
    tasks.map((task, i) => {
      if (task.id === id) {
        return index = i;
      }
    });

    const allTask = [...tasks];
    allTask.splice(index, 1);
    setTask(allTask);
  }

  const editTask = function (id) {
    let index;
    tasks.map((task, i) => {
      if (task.id === id) {
        return index = i;
      }
    });

    const task = document.getElementsByClassName('js-task');
    const clickedTask = task[index];
    clickedTask.disabled = false;
    
    clickedTask.addEventListener('focusout', (e) => {
      clickedTask.disabled = true;
    });
  }

  const editChange = function (id) {
    const jsTask = document.getElementsByClassName('js-task');

    setTask(tasks.map((task, index) => {
      if (task.id === id) {
        task.name = jsTask[index].value;
      }
      return task;
    }));
  }


  return (
    <div className="Todo">
      <Title />
      <AddTaskBar updateData={AddTask}  />
      <TaskTable>
        {
          tasks.map(task => (
            <TaskRow
              key={task.id}
              task={task}
              taskClick={completedTask}
              editClick={editTask}
              deleteClick={deleteTask}
              editChange={editChange}
            />
          ))
        }
      </TaskTable>
    </div>
  );
}

export default Todo;