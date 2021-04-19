import React, { useState } from 'react';


function AddTaskBar(props) {
  const [text, setText] = useState('');

  const handleChangeAddTask = function(e) {
    setText(e.target.value);
  }

  const handleKeyPress = function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (text === '') {
        return;
      }

      props.updateData(text);

      setText('');
    }
  }
  
  return (
    <form>
      <input type={"text"} value={text} onChange={handleChangeAddTask} onKeyPress={handleKeyPress} />
    </form>
  );
}

export default AddTaskBar;