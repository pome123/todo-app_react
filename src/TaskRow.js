import './TaskRow.css';


function TaskRow(props) {
  return (
    <input className="task" type="text" value={props.name} disabled />
  );
}

export default TaskRow;