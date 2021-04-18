import Button from './Button';

import './TaskRow.css';


function TaskRow(props) {

  const { task } = props;

  const handleOnClick = () => {
    const id = task.id;
    // console.log('TaskRow:', id);
    props.taskClick(id)
  }
  
  const handleDeleteClick = () => {
    const id = task.id;
    props.deleteClick(id)
  } 

  return (
    <tr>
      <td>
        <span className={task.complete ? 'complete' : ''} onClick={handleOnClick}>
          <input className="task js-task" name={task.name} type="text" value={task.name} onChange={props.change} disabled />
        </span>
        <Button button="Edit" class="button js-edit" click={props.editClick} dataId={task.id} />
        <Button button="Delete" class="button js-delete" click={handleDeleteClick} /> 
      </td>
    </tr>
  );
}

export default TaskRow;