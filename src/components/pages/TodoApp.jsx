import { useState } from "react"

export const TodoApp = () => {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')

  // Lógica para almacenar los todos
  const inputChange = ({ target }) => {
    setTodo(target.value)
  }

  // Lógica para añadir un todo

  const completeTodo = ({ target }) => {
    const todos = todoList.map(todo => {
      if (target.id === todo.id) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    })

    setTodoList(todos)
  }
  // Lógica para completar un todo

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h1>TodoApp</h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-primary">All</button>
          <button className="btn btn-sm btn-success">Active</button>
          <button className="btn btn-sm btn-danger">Completed</button>
          <button className="btn btn-sm btn-warning">Clear Completed</button>
        </div>
      </div>

      {/* TodoAdd */}
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
          <h3>New Todo</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
            name="todo"
            value={todo.todo}
            // Evento cuando cambia el valor del input
            onChange={inputChange}
            // Evento cuando presiona tecla Enter en ASCII
            onKeyUpCapture={({ key }) => {
              if (key === "Enter") {
                setTodoList([
                  ...todoList,
                  {
                    id: new Date().getTime(),
                    desc: todo,
                    done: false
                  }])
              }
            }
            }
          />
        </div>

        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <ul className="list-unstyled">
            {

              (todoList.length === 0) ? (
                <li
                  key={
                    todo.id
                  }
                  className="alert alert-info">No hay todo</li>
              ) :
                todoList.map(todo => (
                  <li className={`d-flex justify-content-between mb-2 alert ${(todo.done) ? 'alert-success' : 'alert warning'}`}>
                    <span>{todo.desc}</span>
                    <button id={todo.id}
                      className={`btn btn-sm ${(todo.done) ? 'btn-success' : 'btn-warning'}`}
                      onClick={completeTodo}
                    >{(todo.done) ? 'Completada' : 'Completar'}</button>
                  </li>
                )
                )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
