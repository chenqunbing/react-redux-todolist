import React from 'react'
import {connect} from 'react-redux'
import {toggleTodo} from '../redux/actions'
// class Todo extends React.Component {
//     render () {
//         return (
//             <div>

//             </div>
//         )
//     }
// }
const Todo = ({todo, toggleTodo}) => (
    <li onClick={()=> toggleTodo(todo.id)}> 
        <span>{todo.content}</span>
    </li>
)
export default connect(
    null,
    {toggleTodo}
)(Todo);