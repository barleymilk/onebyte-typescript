/*
함수 타입 표현식 
함수 별칭을 이용해 함수의 타입을 별도로 정의하는 방식
매개변수 개수와 타입은 다 맞춰주어야 한다. 
*/
type Operation = (a: number, b: number) => number;

// const add = (a: number, b: number): number => a + b;
const add: Operation = (a, b) => a + b;
// const add: (a: number, b: number) => number = (a, b) => a + b; // 이렇게도 가능하다
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/*
호출 시그니처 (콜 시그니처) 
*/
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

function func(a: number): void {}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2();
add2.name;
