// 인터페이스
// 상호간에 약속된 규칙
// 타입에 이름을 지어주는 또 다른 문법
// +객체의 구조를 정의하는데 특화된 문법 (상속, 합침 등의 특수한 기능을 제공함)
// type A = {
//   a: string;
//   b: number;
// }
// interface A {
//   a: string;
//   b: number;
// }

// interface IPerson과 같이 I를 앞에 붙이는 방법을 사용하기도 함 : 헝가리안 표기법
// 자바스크립트 프로그래밍 중에는 잘 안 씀
// 이러한 관습은 팀을 따라가는 것이 맞음
interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void; // 이렇게도 가능
  sayHi(): void;
  sayHi(a: number, b: number): void; // 함수 표현식 방법으로는 오버로드 시그널을 못 알아먹음. => 호출 시그니처를 사용하는 것을 권장함.
}

type Type1 = number | string;
type Type2 = number & string;
// 인터페이스에서는 교집합, 합집합 불가능
// const person: Person | number= { // 이런 식으로만 가능

const person: Person = {
  name: "이정환",
  // age: 27,
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "홍길동"; // 읽기 전용 프로퍼티이므로 에러남

person.sayHi();
person.sayHi(1, 2);
