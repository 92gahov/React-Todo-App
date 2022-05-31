import React, { useEffect, useRef } from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        // console.log(e.target.value)
        setInputText(e.target.value)
    };

    const input = useRef(null);

    useEffect(() => {
        input.current.focus();
    }, []);

    const submitTodoHandler = (e) => {
        if (inputText === "") {
            alert("Please fill out the field !")
            return false;
        } else {
            setTodos([
                ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
            ])
            setInputText("");
        }
        input.current.focus();
    };


    return (
        <main>
            <div className="main">
                <div>
                    <textarea ref={input} value={inputText} onChange={inputTextHandler} cols="44" rows="3" placeholder="Make event..."></textarea>
                </div>
                <div className="add-btn">
                    <button onClick={submitTodoHandler}>Add new</button>
                </div>
            </div>
        </main>
    );
};

export default Form;