import App from "react";
import "./style.css";

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
export default App;
