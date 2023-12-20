import React from "react";

function Task({ task, deleteItem }) {
  return (
    <div>
      <li>
        {task.todo} ({task.id})
      </li>
      <button onClick={() => deleteItem(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
