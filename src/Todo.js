import Title from './Title';
import AddTaskBar from './AddTaskBar';
import TaskTable from './TaskTable';
import TaskRow from './TaskRow';

function Todo() {
  return (
    <div className="Todo">
      <Title />
      <AddTaskBar />
      <TaskTable>
        {/* <TaskRow /> */}
      </TaskTable>
    </div>
  );
}

export default Todo;