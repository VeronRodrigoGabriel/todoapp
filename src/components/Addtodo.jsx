export const AddTodo = ({ todo, setTodoList, todoList, inputChange }) => {
    return (
        <>
            <h3>New Todo</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Add Todo"
                name="todo"
                value={todo}
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
                            }
                        ])
                    }
                }}
            />
        </>
    )
}