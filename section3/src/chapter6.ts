// 타입 단언 (Type Assertion)

type Person = {
  name: string;
  age: number;
};

// 일단 빈 객체로 초기화해놓고
// 나중에 프로퍼티에 대한 값을 초기화시켜주고 싶을 때
let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", // 어쩔 수 없이 추가로 넣어야 할 때
} as Dog;

// 타입 단언은 아무 상황에서 쓸 수 있는 문법은 아님.
// 타입 단언의 규칙
// 값 as 단언 <= 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 한다.

let num1 = 10 as never; // never타입은 모든 타입의 서브타입이기 때문에 타입 단언이 이루어짐
let num2 = 10 as unknown; // unknown타입은 모든 타입의 슈퍼타입
// let num3 = 10 as string; // 오류! string타입과 number타입은 슈퍼-서브 관계가 아니다.

// 다중 단언을 하면 단언이 안 되는 타입으로도 단언할 수 있다.
// 절대 좋은 방법이 아님!
let num3 = 10 as unknown as string; // 이런 식으로 하면 타입 단언 오류가 나지 않는다...

// const 단언
let numA = 10 as const; // number literal 타입 10으로 추론된다.
// 객체 타입과 사용할 때 활용도가 있다.
// 모든 프로퍼티가 수정될 수 없는 read only 프로퍼티가 된다.
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// Non Null 단언
// 어떤값이 Null이 아니라고 단언
type Post = {
  title: string;
  author?: string; // 없을 수도 있다.
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

// optional chaining : null이거나 undefined인 경우 ?을 해주면 값 전체가 undefined가 되게 함.
// const len: number = post.author?.length;
// number 타입으로 정의한 변수에 undefined는 들어갈 수 없기 때문에 오류가 남.

const len: number = post.author!.length;
// 느낌표 연산이 Non Null 단언
// 해당 값이 null이거나 undefined가 아닐거라고 믿게 만든다.
// author 프로퍼티가 없다고 하더라도 단언을 했기 때문에 믿음.
// 위험한 문법 -> 확실한 때만 사용하자.
