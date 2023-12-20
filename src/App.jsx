import { useState } from "react";
import Task from "./components/Task.jsx";

let globalCount = 0;
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo() {
    setTodos([...todos, { todo: task, id: globalCount++ }]);
    setTask("");
  }

  function deleteItem(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function submit(event) {
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit" onClick={createTodo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((item) => (
          <Task key={item.id} task={item} deleteItem={deleteItem} />
        ))}
      </ul>
    </>
  );
}

export default App;
