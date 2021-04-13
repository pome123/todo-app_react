import React, { Component } from 'react';
import './TaskRow.css';
import Button from './Button';

class TaskRow extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>
            <input className="task" type="text" value="Walk the dog" disabled />
            <Button value="Edit" />
            <Button value="Delete" />
          </td>
        </tr>
        {/* <tr>
          <td>
            <input type="text" value="Wash the car" disabled />
            <Button value="Edit" />
            <Button value="Delete" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" value="Go to the gym" disabled />
            <Button value="Edit" />
            <Button value="Delete" />
          </td>
        </tr> */}
      </tbody>
    );
  }
}

export default TaskRow;