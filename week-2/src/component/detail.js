import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Detail = () => {
  const detailList = useSelector((state) => state.toDo);
  console.log(detailList[0]);
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
    width: 300px;
    height: 300px;
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
  `;

  return (
    <Wrap>
      <ContentsBox>
        <Relocaion>
          <Link to="/">
            <button>이전</button>
          </Link>
        </Relocaion>
        <div>
          <Span>
            <h2>{detailList[0].title}</h2>
          </Span>
        </div>
        <div>
          <Span>
            <h2>{detailList[0].text}</h2>
          </Span>
        </div>
      </ContentsBox>
    </Wrap>
  );
};

export default Detail;
