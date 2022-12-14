import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fixTodo } from "../redux/modules/toDo";
const Detail = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [fix, setFix] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log({ id });
  const detailList = useSelector((state) => state.toDo);
  console.log(detailList);

  // const onClickrelocation = (item) => {
  //   return dispatch(relocatonTodo(item));
  // };
  const [detail] = detailList.filter((item) => item.id === +id);
  console.log(detail);
  // useEffect(() => {}, []);
  
  const onFixTitleChange = (e) => {
    setTitle(e.target.value);
  };
  console.log(title);
  const onFixContentChange = (e) => {
    setText(e.target.value);
  };
  console.log(text);
  const onClickFixHandler = (value) => {
    setFix((prev) => !prev);
    dispatch(fixTodo(value));
  };
  const multiValue = { title, text, id };
  console.log(multiValue);

  return (
    <Wrap>
      <ContentsBox>
        <Relocaion>
          <Link to="/">
            <button /*onClick={() => onClickrelocation(detailList)}*/>
              이전
            </button>
          </Link>
        </Relocaion>
        {fix === true ? (
          <div>
            <div>
              <Span>
                <input
                  onChange={onFixTitleChange}
                  type="text"
                  value={title}
                ></input>
              </Span>
            </div>
            <div>
              <Span>
                <input
                  onChange={onFixContentChange}
                  type="text"
                  value={text}
                ></input>
              </Span>
            </div>
          </div>
        ) : (
          <div>
            <Span>{detail.title}</Span>

            <Span>{detail.text}</Span>
          </div>
        )}

        <div>
          <button onClick={() => onClickFixHandler(multiValue)}>
            수정하기
          </button>
        </div>
      </ContentsBox>
    </Wrap>
  );
};

export default Detail;

// const Container = styled.div`
//   display: flex;
//   place-items: center;
//   border-radius: 10%;
//   border: 10px solid black;
// `;
const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
// const Div = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: f7a7bb;
// `;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentsBox = styled.div`
  width: 500px;
  height: 400px;
  border: none;
  border-radius: 10%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #cd1d5e;
  button {
    border: none;
    border-radius: 10%;
    background-color: #cd1d5e;
    color: black;
    width: 80px;
    height: 25px;
    cursor: pointer;
  }
`;
const Relocaion = styled.div`
  display: flex;
  margin-left: 150px;
  margin-bottom: 20px;
`;
