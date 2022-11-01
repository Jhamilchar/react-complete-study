import { useReducer } from "react";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del tiempo",
    done: false,
  }
]

export const TodoApp = () => {

  const [todos, dispatchTodo] = useReducer( todoReducer, initialState )

  return (
    <>
      <h1>TodoApp: 10,  <small>Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">

          <TodoList todos={ todos }/>

        </div>

        <div className="col-5">
          <h4>AgregarTODO</h4>
          <hr />

        </div>

      </div>



    </>
  )
}