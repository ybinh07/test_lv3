

import TodoListHeader from "./components/TodoListHeader.js";
import TodoList from "./components/TodoList.js";
import Form from "./components/Form.js";
import "./App.css"
import { useState } from "react";
export default function App() {
  const [updated,setUpdated]=useState(false);
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <TodoList changeVal={updated} />
        <Form changeVal={updated} method={setUpdated}/>
        <TodoListHeader changeVal={updated}/>
      </div>
   
    </div>
  );
}