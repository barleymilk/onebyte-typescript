/*
선언 합침
*/

// interface는 type과 달리 동일한 이름으로 선언해도 문제가 되지 않는다.
// 동일한 이름으로 정의한 interface는 결국 다 합쳐지기 때문이다.
// 이를 선언 합침(declaration merging)이라고 부른다.
// 라이브러리의 타입이 부실할 경우에 이 타입을 좀 더 추가해주고 정확하게 만들어주는 일종의 모듈 보강이라는 작업을 할 때 사용한다.
interface Person {
  name: string;
}

interface Person {
  // name: number; // 오류남 (충돌) -> 반드시 동일한 타입으로만 선언 해야 함.
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 27,
};

/*
모듈 보강
*/

interface Lib {
  a: number;
  b: number;
}

// 모듈의 타입을 보강한다.
interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello", // c를 추가해야 한다고 할 때
};
