// 구조분해 할당을 사용하지 않을 때
const user = {name:"손석구",age:10}

console.log(user.name)
console.log(user.age)

//구조 분해 할당을 사용했을 때

const {name,age} =user

console.log(name)
console.log(age)

//배열 구조분해 할당 코드 비교

const games = ['배틀그라운드','리그오브레전드'];

console.log(games[0])
console.log(games[1])

//구조분해 할당을 사용할 때
const [battleGround, Lol] = games;
console.log(battleGround,Lol)

//함수 인자에서 구조분해 할당
//(1) 구조분해 할당을 사용하지 않을 떄
//user가 객체일 때
const getUserName = (user) => {
    return user.name
}
//user가 배열일 때
const getUserName = (user) => {
    return user[0]
}
//구조분해 할당 사용했을 때!
//객체 일때
const getUserName = ({name,age}) => {
    return name;
};

//배열일 때
const getUserName = ([name,age])=>{
    return name
};

//spread operator (전개 구문)
const box = {size: "big", color: "red"};
const newBox = {...box}; // {size:"big",color:"red"}
const newBlueBox = {...box, color:"blue"};

//rest operator
const user = {id:1, name:"둘리", age:10, location:"seoul"};

//rest 사용
const {name, ...rest}= user;
// 콘솔에 rest를 찍어보면, 구조분해 할당을 한 정보를 제외한 나머지 값을 보여줍니다.
console.log(rest)
