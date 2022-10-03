import React from "react";
import Layout from "./component/Layout";

function App(props) {
  return(
    <div>이건 모든 페이지에서 보이는 헤더입니다.
    <Layout>
<div>{props.children}</div>
    </Layout>
  
    </div>
  ) 
}
  

export default App;






import React from "react";

const Layout =({children})=> {
return(
        <div>여긴About의 컨텐츠가 들어갑니다.</div>
)
};

export default Layout;
