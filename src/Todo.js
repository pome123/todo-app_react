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

  const completedTask = function (e) {
    const clickedTask = e.target;
    const id = clickedTask.getAttribute('data-id');

    clickedTask.classList.toggle('complete');

    let index;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        index = i;
      }
    }

    const allTask = [...tasks];
    clickedTask.classList.contains('complete') ? allTask[index].complete = true : allTask[index].complete = false;
    setTask(allTask);
  }

  const deleteTask = function (e) {
    const id = e.target.getAttribute('data-id');

    let index;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        index = i;
      }
    }
    const allTask = [...tasks];
    allTask.splice(index, 1);
    setTask(allTask);
    return;
  }

  const editTask = function (e) {
    const id = e.target.getAttribute('data-id');

    const task = document.getElementsByClassName('js-task');
    let index;
    for (let i = 0; i < task.length; i++) {
      if (task[i].getAttribute('data-id') === id) {
        index = i;
      }
    }

    const clickedTask = task[index];
    clickedTask.disabled = false;
    
    clickedTask.addEventListener('focusout', (e) => {
      clickedTask.disabled = true;
    });
  }

  const handleChangeEditTask = function (e) {
    const id = e.target.getAttribute('data-id');

    setTask(tasks.map((task) => {
      if (task.id === id) {
        task.name = e.target.value;
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
              change={handleChangeEditTask}
            />
            // <tr key={task.id}>
            //   <td>
            //     <TaskRow name={task.name} value={task.name} click={completedTask} change={handleChangeEditTask} dataId={task.id} />
            //     <Button button="Edit" class="button js-edit" click={editTask} dataId={task.id} />
            //     <Button button="Delete" class="button js-delete" click={deleteTask} dataId={task.id} /> 
            //   </td>
            // </tr>
          ))
        }
      </TaskTable>
    </div>
  );
}

export default Todo;