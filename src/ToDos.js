import Todoitem from "./TodoItem"

export default function Todos({todo, toggleCheck, deleteTodo}) {
    return(
        <ul className="list">
          {todo.map(todo => {
            return(
                <Todoitem id={todo.id}  title={todo.title} completed={todo.completed} toggleCheck={toggleCheck} deleteTodo={deleteTodo}/> 
            )
          })}
    </ul>
     
 
    )
}