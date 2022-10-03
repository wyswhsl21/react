function sayHello() {
    return "hello world"
}

//함수 선언식

const sayHello = function() {
    return "hello world"
}

//함수 표현식

const sayHello =() => {
    //< === 함수 로직 ===>
    return "hello world"
}
//Arrow function 방식
//return 을 생략하는 방식!
const sayHello = () => "hello world"

//Arrow function 방식 2 = 암시적 반환

//예시 기본적인 함수 표현 방식
const sayHelloOnclick =() => {
    console.log('hello friend')
}
<App onClick={sayHelloOnclick}/>

//!예시 1 = 익명함수
<App onClick={()=>console.log('hello friend')}/>

//예시2 - 기본적인 함수 표현 방식
const ReturnItem = (item) => {
    return <div>{item}</div>
}
{array.map(ReturnItem)}

//예시 2 익명 함수
{array.map((item)=><div>{item}</div>)}


