// [ any 타입 ]
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

// anyVar.toUpperCase(); // 런타임에 오류 발생 -> 함수는 toUpperCase() 메소드 사용 불가
// anyVar.toFixed();

let num: number = 10;
num = anyVar; // 타입 오류가 발생하지 않는다.

// 모든 타입의 변수에 할당할 수 있다.
// 치트키...지만서도 타입스크립트의 이점을 다 포기하는 것과 다름이 없다.
// any는 최대한 사용하지 말자!

// [ unknown 타입 ]
// any와 다르게 모든 타입의 변수에 unknown 값을 넣을 수 없다.
// 적어도 아무 메소드를 사용할 수 없고 아무 변수에 할당할 수 없기 때문에 any보단 unknown을 활용하자.
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknownVar.toUpperCase(); // 절대 허용되지 않음

// 타입 정제를 통해 할당 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}
