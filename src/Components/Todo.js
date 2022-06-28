import React from "react";
import check from "./img/circle-check-solid.svg";
import remove from "./img/trash-can-solid.svg";
import calendar from "./img/calendar-solid.svg";

const Todo = ({ text, todo, todos, setTodos, date }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    return (
        <div className="output">
            <div className="cal-icon">
                <img alt="" src={calendar}></img>
            </div>
            <div className="date-output">
                <p>{date}</p>
            </div>
            <div className="event-info">
                <p className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</p>
            </div>
            <div className="check">
                <img alt="" onClick={completeHandler} src={check}></img>
            </div>
            <div className="remove">
                <img alt="" onClick={deleteHandler} src={remove}></img>
            </div>
        </div>
    );
};

export default Todo;