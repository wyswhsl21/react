import { useState } from "react";
import "./App.css";

const List = ({ value, setValue }) => {
  console.log(value);
  function handleCompleteList(num) {
    const newState = value.map((item) => {
      if (item.id === num) {
        item.state = "done";
      }
      return item;
    });

    setValue(newState);
  }
  const handleCancelList = (num) => {
    const canselState = [...value].map((item) => {
      if (item.id === num) {
        item.state = "working";
      }
      return item;
    });
    setValue(canselState);
  };

  const handleRemoveList = (num) => {
    console.log(num);
    const removeList = [...value].filter((item) => item.id !== num);
    setValue(removeList);
  };

  const workingValue = value.filter((item) => item.state === "working");
  const doneValue = value.filter((item) => item.state === "done");

  return (
    <div className="list-container">
      <h2>Working.. 🔥</h2>
      <div className="list-wrapper">
        {workingValue.map((item) => {
          return (
            <div className="todos-container">
              <div>
                <h2 className="todo-title">
                  <span>{item.title}</span>
                </h2>
                <div>
                  <span>{item.content}</span>
                </div>
              </div>
              <div className="button-set">
                <button
                  onClick={() => handleRemoveList(item.id)}
                  className="todo-delete-button"
                >
                  삭제하기
                </button>
                <button
                  onClick={() => handleCompleteList(item.id)}
                  className="todo-complete-button"
                >
                  완료
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {doneValue.map((item) => {
          return (
            <div className="todos-container">
              <div>
                <h2 className="todo-title">
                  <span>{item.title}</span>
                </h2>
                <div>
                  <span>{item.content}</span>
                </div>
              </div>
              <div className="button-set">
                <button
                  onClick={() => handleRemoveList(item.id)}
                  className="todo-delete-button"
                >
                  삭제하기
                </button>
                <button
                  onClick={() => handleCancelList(item.id)}
                  className="todo-complete-button"
                >
                  취소하기
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Form = ({ value, setValue }) => {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");
  function handleFormSubmit(event) {
    event.preventDefault();
    setValue([...value, { title, content, state: "working", id: Date.now() }]);
  }
  console.log(value);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleContentChange(e) {
    setContent(e.target.value);
  }
  return (
    <form className="add-form">
      <label className="form-label">제목</label>
      <input
        value={title}
        type="text"
        name="title"
        className="add-input-body"
        onChange={handleTitleChange}
      ></input>
      <label className="form-label">내용</label>
      <input
        type="text"
        name="title"
        className="add-input"
        onChange={handleContentChange}
        value={content}
      ></input>
      <div>
        <button type="submit" className="add-button" onClick={handleFormSubmit}>
          추가하기
        </button>
      </div>
    </form>
  );
};
function Todo() {
  return (
    <div className="container" id="todos">
      <div>My Todo List</div>
      <div>React</div>
    </div>
  );
}
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
