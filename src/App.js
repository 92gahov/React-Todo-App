import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("toDoS");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [checkDay, setCheckDay] = useState(false);
  const [eventToday, setEventToday] = useState("");

  let modal;
  let d = new Date().getDate();
  let m = new Date().getMonth() + 1;
  let y = new Date().getFullYear();
  d = addZero(d);
  m = addZero(m);
  let today = `${d}.${m}.${y}`;

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  useEffect(() => {
    localStorage.setItem("toDoS", JSON.stringify(todos));
  });

  useEffect(() => {
    let events = JSON.parse(localStorage.getItem("toDoS"));
    for (let i = 0; i < events.length; i++) {
      if (events[i].date === today) {
        setCheckDay(true);
        setEventToday(events[i].text)
      }
      if (events[i].completed === true) {
        setCheckDay(false)
      }
    }
  }, []);

  let title = "";
  if (todos.length === 1) {
    title = "event";
  } else {
    title = "events";
  };

  function closeModal() {
    setCheckDay(false);
  };

  if (checkDay) {
    modal = <div className='modal'>
      <div className='today-event'>
        <span className='close'
          onClick={closeModal}>&times;</span>
        <p><b>For today:</b></p>
        <p>{eventToday}</p>
      </div>
    </div>
  };

  return (
    <div className="App">
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} inputDate={inputDate} setInputDate={setInputDate} />
      <TodoList setTodos={setTodos} todos={todos} />
      <div className="count">
        <p>You have {todos.length} {title}</p>
      </div>
      {modal}
    </div>
  );
};

export default App;
