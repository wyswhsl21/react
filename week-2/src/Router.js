import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Detail from "./component/detail";
//임포트 경로 들!

const Routers = () => {
  return (
    <Routes>
      <Route path="TodoList/:id" element={<Detail />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default Routers;
