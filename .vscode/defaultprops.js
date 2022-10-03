import React from "react";
import Layout from "./component/Layout";

function Child({name}) {        //구조분해
  return <div>{name}</div>      //(props) => {(title)}
}                                  //{props.name} => {title} 이런식으로 적었는데 이걸 통합 

Child.defaultProps ={
  name:'기본이름'    // props를 가져오기전에 임시로 props의 값을 채울수있음.
}


export default Child;