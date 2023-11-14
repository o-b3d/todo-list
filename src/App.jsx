import { useState } from "react";
import "./App.css";

export default function App() {
  {
    /*For a useState: todos is getter, setTodos is setter */
  }
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Enter To-Do",
      done: false,
    },
  ]);

  const [newTodos, setNewTodos] = useState("");

  const addTodo = (text) => {
    const newTodoList = [
      ...todos,
      { id: todos.length + 1, task: text, done: false },
    ];
    setTodos(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todo.filter((item) => item.id != id);
    setTodos(newTodoList);
  };

  return (
    <>
      <div className="todoListContainer">
        <h3>To-Do List {"-->"}</h3>
        <div className="newTodoContainer">
          <input
            value={newTodos}
            placeholder="Add New Todo Temp"
            onChange={(event) => setNewTodos(event.target.value)}
          />
          <button onClick={() => addTodo(newTodos)} className="addButton">
            Add
          </button>
        </div>

        <ul className="todoList">
          {todos.map((item) => {
            return (
              <li key={item.id} className="todoListItem">
                <input type="checkbox" value={item.done} />
                <span className="todoContent">{item.task}</span>
                <button
                  onClick={() => deleteTodo(item.id)}
                  className="deleteButton"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Create Span that modifies existing To-Do's and add function to button crossing out To-Do and make it able to press enter*/}
    </>
  );
}

export function Todo() {}
