function TaskTable(props) {
  return (
    <table>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}

export default TaskTable;