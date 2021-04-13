import TaskRow from './TaskRow';
function TaskTable(props) {
  return (
    <table>
      <tbody>
        <TaskRow task="Walk the dog" />
      </tbody>
    </table>
  );
}

export default TaskTable;