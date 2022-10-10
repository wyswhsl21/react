import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { valueForm } from "../redux/modules/toDo";

const Form = () => {
  const Container = styled.div`
    background-color: black;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    div {
      display: flex;
      justify-content: space-around;
      input {
        outline: none;
        &:hover {
        }
      }
    }
  `;
  const Span = styled.span`
    font-size: 23px;
    font-style: italic;
    color: #ffd8d8;
    padding-bottom: 10px;
  `;
  const Input = styled.input`
    border: 0.5px solid #b8b8b8;
    border-radius: 5px;
    width: 400px;
    height: 30px;
    font-size: 25px;
    margin-right: 200px;
    display: flex;
    flex-direction: row;
    background-color: #f3f3f3;
    transition: 1s;
    &:hover {
      background-color: #ffd8d8;
    }
  `;
  const Button = styled.button`
    color: black;
    border-color: white;
    background-color: #fff1ff;
    border-radius: 10px;
    width: 100px;
    height: 35px;
    padding: 10px;
    padding-bottom: 25px;
    margin: 5px;
    cursor: pointer;
    transition: background-color, 5s;
    &:hover {
      background-color: #ff5aff;
    }
  `;

  const titleref = useRef("");
  const contentref = useRef("");
  const dispatch = useDispatch();
  const onClickValueChangeHandler = () => {
    const multiRef = [titleref.current.value, contentref.current.value];
    if (multiRef[0] === "") {
      return "";
    } else if (multiRef[1] === "") {
      return "";
    } else {
      dispatch(valueForm(multiRef));
      titleref.current.value = "";
      contentref.current.value = "";
      return;
    }
  };
  return (
    <Container>
      <div>
        <Span>제목</Span>
      </div>
      <div>
        <Input ref={titleref} type="text" />
      </div>
      <div>
        <Span>내용</Span>
      </div>
      <div>
        <Input type="text" ref={contentref} />
      </div>
      <div>
        <Button onClick={onClickValueChangeHandler}>제출</Button>
      </div>
    </Container>
  );
};

export default Form;
