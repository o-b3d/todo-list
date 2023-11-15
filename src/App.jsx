import { useState } from "react";
import "./App.css";

export default function App() {
  {
    /*For a useState: todos is getter, setTodos is setter */
  }
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Enter your To-Do Above",
      done: false,
    },
  ]);

  const [newTodos, setNewTodos] = useState("");

  const addTodo = (text) => {
    const newTodoListForAddTodo = [
      ...todos,
      { id: todos.length + 1, task: text, done: false },
    ];
    setTodos(newTodoListForAddTodo);
  };

  const deleteTodo = (id) => {
    const newTodoListForDeleteTodo = todos.filter((item) => item.id != id);
    setTodos(newTodoListForDeleteTodo);
  };

  /* prettier-ignore */
  const updateTodoText = (id, task) => {
    const newTodos = toDos.map((todo) => {
      if (todo.id === id) {
        return {...todo, task}
      } else {
        return item
      }
    }
    )
    setTodos(newTodos)
  };

  /* Created preventDefault variable since there is no backend for form*/
  /* prettier-ignore */
  const preventDefault = (e) => {e.preventDefault()};

  return (
    <>
      <div className="todoListContainer">
        <h3>To-Do List {"-->"}</h3>
        <div className="newTodoContainer">
          {/* Wrapped input and button inside Form tag to make the input field work with the enter key */}
          <form onSubmit={preventDefault}>
            <input
              value={newTodos}
              placeholder="Enter Text Here"
              onChange={(event) => setNewTodos(event.target.value)}
            />
            <button onClick={() => addTodo(newTodos)} className="addButton">
              Add
            </button>
          </form>
        </div>

        <ul className="todoList">
          {todos.map((item) => {
            return (
              <li key={item.id} className="todoListItem">
                <input
                  type="checkbox"
                  value={item.done}
                  /* Same as below, need to figure out how to update the state using the onChange eventListener to
                  update using striketext css value inside Input Text classname*/
                  onChange={() => {}}
                />
                {/* Replaced below Span tag with Input tag to make the created To-Do modifiable */}
                {/* -> I have to figure out a way to update the state of "todos" using the onChange eventListener
                and with the declared variable updateTodoText I created*/}
                {/* prettier-ignore */}
                <input
                  type="text"
                  /* Added conditional operator to className to add striketext css value to Input Text if checkbox is checked */
                  className={`todoContent ${item.done ? 'striketext' : ''}`}
                  value={item.task}
                  onChange={(event) => updateTodoText(item.id, event.target.value)
                  }
                  />
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
