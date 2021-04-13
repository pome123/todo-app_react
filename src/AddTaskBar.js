function AddTaskBar(props) {
 return (
    <form>
      <input type="text" value={props.value} onChange={props.change} onKeyPress={props.keyPress} />
    </form>
  );
}

export default AddTaskBar;