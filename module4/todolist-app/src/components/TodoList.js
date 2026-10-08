import { useNavigate } from 'react-router-dom';

function TodoList({ todos, deleteTodo, toggleTodo }) {

  const navigate = useNavigate();

  const showAddTodo = () => {
    navigate("/addtodo");
  };

  return (
    <div>

      <h1>To-Do List Application</h1>

      <h2>My Tasks</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {todos.map((todo) => (

            <tr key={todo.id}>

              <td>
                {todo.task}
              </td>

              <td>
                {todo.completed ? "Completed" : "Pending"}
              </td>

              <td>

                <button onClick={() => toggleTodo(todo.id)}>
                  {todo.completed ? "Undo" : "Complete"}
                </button>

                <button onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <br />

      <button onClick={showAddTodo}>
        Add Todo
      </button>

    </div>
  );
}

export default TodoList;