import './TaskRow.css';


function TaskRow(props) {
  return (
    <span onClick={props.click}>
      <input className="task js-task" name={props.name} type="text" value={props.value} disabled />
    </span>
  );
}

export default TaskRow;