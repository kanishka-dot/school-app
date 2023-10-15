export default function Todoitem({id, title, completed, toggleCheck, deleteTodo}) {
    return(
        <li key={id}>
        <label>
          <input type="checkbox" checked={completed} onChange={e => toggleCheck(id, e.target.checked)}/>
            {title}
        </label>
      <button className="btn btn-danger" onClick={ () => deleteTodo(id)}> Delete</button>
    </li>
    )
}