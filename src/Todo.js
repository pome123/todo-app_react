import React, { useState } from 'react';

import Title from './Title';
import AddTaskBar from './AddTaskBar';
import TaskTable from './TaskTable';
import TaskRow from './TaskRow';
import Button from './Button';

import generateId from './generateId';

import './Todo.css';


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

  // タスク追加用
  const [text, setText] = useState('');
  

  const handleChangeAddTask = function(e) {
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

  const completedTask = function (e) {
    const clickedTask = e.target.parentNode.firstElementChild;
    clickedTask.classList.toggle('complete')

    let index;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].name === clickedTask.value) {
        index = i;
      }
    }

    const allTask = [...tasks];
    e.target.classList.contains('complete') ? allTask[index].complete = true : allTask[index].complete = false;
    setTask(allTask);
  }

  const deleteTask = function (e) {
    const clickedTask = e.target.parentNode.firstElementChild.firstElementChild;

    let index;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].name === clickedTask.value) {
        index = i;
      }
    }
    const allTask = [...tasks];
    allTask.splice(index, 1);
    setTask(allTask);
    return;
  }

  const editTask = function (e) {
    const clickedTask = e.target.parentNode.firstElementChild.firstElementChild;

    let index;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].name === clickedTask.value) {
        index = i;
      }
    }

    console.dir(clickedTask);
    clickedTask.disabled = false;
    
    clickedTask.addEventListener('focusout', (e) => {
      clickedTask.disabled = true;
    });
  }

  const handleChangeEditTask = function (e) {
    console.log(e);
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
      <AddTaskBar value={text} change={handleChangeAddTask} keyPress={AddTask}  />
      <TaskTable>
        {
          tasks.map(task => (
            <tr key={task.id}>
              <td>
                <TaskRow name={task.name} value={task.name} click={completedTask} change={handleChangeEditTask} dataId={task.id} />
                <Button button="Edit" class="button js-edit" click={editTask} />
                <Button button="Delete" class="button js-delete" click={deleteTask} /> 
              </td>
            </tr>
          ))
        }
      </TaskTable>
    </div>
  );
}

export default Todo;