import styled, { createGlobalStyle } from "styled-components";
import Form from "./form";
import Header from "./header";
import TodoList from "./todolist";

const Home = () => {
  const Background = styled.div`
    background-color: black;
    height: 100vh;
  `;

  return (
    <div>
      <Background>
        <Header />
        <Form />
        <TodoList />
      </Background>
    </div>
  );
};

export default Home;
