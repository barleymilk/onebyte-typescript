// 대수 타입
// -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입, 교집합 타입

// 1. 합집합 타입 - Union Type
let a: string | number | boolean; // string 또는 number 또는 boolean이 들어갈 수 있다.
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 오류 발생!
// let union4: Union1 = {
//   name: string;
// }

// 2. 교집합 타입 - Intersection Type
// 객체 타입에 많이 사용함.
let variable: number & string; // never 타입과 같다.

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
