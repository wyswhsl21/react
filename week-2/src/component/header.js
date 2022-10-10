import styled from "styled-components";

const Header = () => {
  const Container = styled.div`
    background-color: black;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    color: white;
  `;
  const Div = styled.div`
    color: #ffd8d8;
  `;
  return (
    <Container>
      <Div>To do List</Div>
      <Div>React</Div>
    </Container>
  );
};

export default Header;
