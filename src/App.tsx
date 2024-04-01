import AddTodo from "./Components/AddTodo"
import Navbar from "./Components/Navbar"
import Todos from "./Components/Todos"

const App = () => {
  return (
    <main>
      <h1>Todo App With Typescript</h1>
      <Navbar/>
      <AddTodo/>
      <Todos/>
    </main>
  )
}

export default App
