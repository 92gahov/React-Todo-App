import React, { useEffect, useRef } from "react";

const Form = ({ setInputText, todos, setTodos, inputText, inputDate, setInputDate }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const inputDateHandler = (e) => {
        setInputDate(e.target.value)
    };

    const input = useRef(null);

    useEffect(() => {
        input.current.focus();
    }, []);

    let dateSplit = inputDate.split("-");
    let dateFormat = `${dateSplit[2]}.${dateSplit[1]}.${dateSplit[0]}`;

    const submitTodoHandler = (e) => {
        if (inputText === "" || inputDate === "") {
            alert("Please fill out the fields !")
            return false;
        } else {
            setTodos([
                ...todos, { text: inputText, date: dateFormat, completed: false, id: Math.random() * 1000 }
            ])
            setInputText("");
            setInputDate("");
        }
        input.current.focus();
    };


    return (
        <main>
            <div className="main">
                <div>
                    <textarea ref={input} value={inputText} onChange={inputTextHandler} cols="44" rows="3" placeholder="Make an event..."></textarea>
                </div>
                <div className="date">
                    <input type="date" value={inputDate} onChange={inputDateHandler}></input>
                </div>
                <div className="add-btn">
                    <button onClick={submitTodoHandler}>Add new</button>
                </div>
            </div>
        </main>
    );
};

export default Form;