import Button from './Button';

import './TaskRow.css';


function TaskRow(props) {

  const { task } = props;

  const handleTaskClick = () => {
    const id = task.id;
    props.taskClick(id);
  }
  
  const handleDeleteClick = () => {
    const id = task.id;
    props.deleteClick(id);
  }

  const handleEditClick = () => {
    const id = task.id;
    props.editClick(id);
  }
  
  const handleChange = () => {
    const id = task.id;
    props.editChange(id);
  } 

  return (
    <tr>
      <td>
        <span onClick={handleTaskClick}>
          <input className={task.complete ? 'task js-task complete' : 'task js-task'} type="text" value={task.name} onChange={handleChange} disabled />
        </span>
        <Button button="Edit" class="button js-edit" click={handleEditClick} />
        <Button button="Delete" class="button js-delete" click={handleDeleteClick} /> 
      </td>
    </tr>
  );
}

export default TaskRow;