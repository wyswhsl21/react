// src/App.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Detail from "./component/detail";
import Home from "./component/Home";
const App = () => {
  // const counterStore = useSelector((state) => state); // 추가해주세요.
  // console.log(counterStore); // 스토어를 조회해볼까요?
  return (
    <Routes>
      <Route path="TodoList/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
