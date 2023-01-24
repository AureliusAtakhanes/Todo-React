import Todo from "./Todo";
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo) =>
                <Todo todo={todo} deleteTodo={deleteTodo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                />)}
        </div>
    )
}

export default TodoList;