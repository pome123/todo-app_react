import React, { useState } from 'react';

// component
import Title from './Title';
import AddTaskBar from './AddTaskBar';
import TaskTable from './TaskTable';
import TaskRow from './TaskRow';

// function
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
    tasks.map((task, index) => {
      if (task.id === id) {
        // タスク編集時
        const clickedTask = document.getElementsByClassName('js-task')[index];
        if (clickedTask.disabled === false) {
          return task;
        }
        task.complete ? task.complete = false : task.complete = true;
      }

      return task;
    });

    const allTask = [...tasks];
    setTask(allTask);
  }

  const deleteTask = function (id) {
    const allTask = [...tasks];

    tasks.map((task, index) => {
      if (task.id === id) {
        allTask.splice(index, 1);
      }
      return setTask(allTask);
    });

    
  }

  const editTask = function (id) {
    let clickedTask;
    tasks.map((task, index) => {
      if (task.id === id) {
        clickedTask = document.getElementsByClassName('js-task')[index];
      }
      return clickedTask;
    });

    clickedTask.disabled = false;
    clickedTask.focus();

    clickedTask.addEventListener('focusout', () => {
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