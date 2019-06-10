import React from 'react'
import Todo from './Todo.js'
import {connect} from 'react-redux'
import {getTodosByVisibilityFilter} from '../redux/selector'
const TodoList = ({todos}) => (
    <ul>
        {
            todos && todos.length ? todos.map((todo, index) => {
                return <Todo key={index} todo={todo}/>
            }):'No toods, Yel'
        }
    </ul>
)
const mapStateToProps = state => {
    const {visibilityFilter} = state
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {todos}
}

export default connect(mapStateToProps)(TodoList)