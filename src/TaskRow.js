import Button from './Button';

import './TaskRow.css';


function TaskRow(props) {
  return (
    <span onClick={props.click}>
      <input className="task js-task" name={props.name} type="text" value={props.value} onChange={props.change} data-id={props.dataId} disabled />
    <tr>
      <td>
    </span>
        <Button button="Edit" class="button js-edit" click={props.editClick} dataId={task.id} />
        <Button button="Delete" class="button js-delete" click={props.deleteClick} dataId={task.id} /> 
      </td>
    </tr>
  );
}

export default TaskRow;