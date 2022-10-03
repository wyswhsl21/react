import React from "react";

function Child(props){
  console.log(props)
  return<div>{props.grandFatherName}</div>;
}
function Mother(){
  return<Child />;
}
function Father(){
  return<Mother />;
}
function GrandFather(){
  const name ="김도깨비";
  return<Child grandFatherName={name}/>;// 할아버지 부모 컴포넌트에서 바로 child
                                        // 컴포넌트로 데이터 전달이 가능!
}
function App(){
  return<GrandFather/>;
}

export default App;
