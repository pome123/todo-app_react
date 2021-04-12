import React, { Component } from 'react';
import './TaskRow.css';

class TaskRow extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>
            <input className="task" type="text" value="Walk the dog" disabled />
            <input className="button" type="button" value="Edit" />
            <input className="button" type="button" value="Delete" />
          </td>
        </tr>
        {/* <tr>
          <td>
            <input type="text" value="Wash the car" disabled />
            <input type="button" value="Edit" />
            <input type="button" value="Delete" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" value="Go to the gym" disabled />
            <input type="button" value="Edit" />
            <input type="button" value="Delete" />
          </td>
        </tr> */}
      </tbody>
    );
  }
}

export default TaskRow;