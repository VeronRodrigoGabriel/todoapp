import { useState } from 'react'
import { TodoApp } from './pages/TodoApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoApp />
  )
}

export default App
