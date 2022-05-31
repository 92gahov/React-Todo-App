import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="output-main">
            {todos.map(todo => (
                <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text} />
            ))}
        </div>
    );
};

export default TodoList;