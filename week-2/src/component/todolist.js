import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  cancelTodo,
  completeTodo,
  deleteTodo,
  detailTodo,
} from "../redux/modules/toDo";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.toDo);
  console.log(todoList);

  const onClickCompleteHandler = (id) => {
    return dispatch(completeTodo(id));
  };
  const onClickCancelHandler = (id) => {
    return dispatch(cancelTodo(id));
  };
  const onClickDelteHandler = (id) => {
    return dispatch(deleteTodo(id));
  };
  const onClickDetailHandler = (item) => {
    return dispatch(detailTodo(item));
  };

  const done = todoList.filter((item) => item.isDone === true);
  const working = todoList.filter((item) => item.isDone === false);
  return (
    <Wrap>
      <Span>Working!!</Span>
      <div>
        {working.map((item) => (
          <StTodo key={item.id} id={item.id}>
            <Span>
              <Detail>
                <Link
                  onClick={() =>
                    onClickDetailHandler(
                      item.id,
                      item.title,
                      item.content,
                      item.isDone
                    )
                  }
                  to={`/TodoList/${item.id}`}
                >
                  상세보기
                </Link>
              </Detail>
            </Span>
            <Span>
              <h3>{item.title}</h3>
            </Span>
            <Span>{item.text}</Span>
            <Span>
              {item.isDone === false ? (
                <Button onClick={() => onClickCompleteHandler(item.id)}>
                  완료
                </Button>
              ) : (
                <Button onClick={() => onClickCancelHandler(item.id)}>
                  취소
                </Button>
              )}
              <Button onClick={() => onClickDelteHandler(item.id)}>제거</Button>
            </Span>
          </StTodo>
        ))}
      </div>
      <Span>Done</Span>
      <div>
        {done.map((item) => (
          <StTodo key={item.id} id={item.id}>
            <Span>
              <Link
                onClick={() =>
                  onClickDetailHandler(
                    item.id,
                    item.title,
                    item.content,
                    item.isDone
                  )
                }
                to={`/TodoList/${item.id}`}
              >
                상세보기
              </Link>
            </Span>
            <Span>
              <h3>{item.title}</h3>
            </Span>
            <Span>{item.text}</Span>
            <Span>
              {item.isDone === false ? (
                <Button onClick={() => onClickCompleteHandler(item.id)}>
                  완료
                </Button>
              ) : (
                <Button onClick={() => onClickCancelHandler(item.id)}>
                  취소
                </Button>
              )}
              <Button onClick={() => onClickDelteHandler(item.id)}>제거</Button>
            </Span>
          </StTodo>
        ))}
      </div>
    </Wrap>
  );
};

export default TodoList;

const StTodo = styled.div`
  border: 1px solid white;
  background-color: #f3f3f3;
  width: 250px;
  height: 200px;
  margin-bottom: 30px;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: #cd1d5e;
  padding-bottom: 10px;
  margin: 0px;
`;
const Button = styled.button`
  color: black;
  border-color: white;
  background-color: #ffe7eb;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  padding: 0px;
  padding-bottom: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color, 5s;
  &:hover {
    background-color: #ff5aff;
  }
`;
const Detail = styled.div`
  background-color: #f3f3f3;
  margin-right: 150px;
`;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
