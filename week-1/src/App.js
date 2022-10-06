import { useState } from "react";
import "./App.css";
import Form from "./component/form/Form";
import Todo from "./component/header/Header";
import List from "./component/list/List";

const App = () => {
  const [value, setValue] = useState([]);

  return (
    <div>
      <Todo />
      <Form setValue={setValue} value={value} />
      <List setValue={setValue} value={value} />
    </div>
  );
};

export default App;
