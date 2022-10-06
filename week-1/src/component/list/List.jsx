import React from "react";
import "./style.css";
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
export default List;
