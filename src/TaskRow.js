import Button from './Button';
import './TaskRow.css';


function TaskRow(props) {
  return (
    <tr>
      <td>
        <input className="task" type="text" value={props.task} disabled />
        <Button value="Edit" />
        <Button value="Delete" />
      </td>
    </tr>
  );
}

export default TaskRow;