// void
// void -> 공허
// 아무 것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

// null이나 undefined가 아니라 void가 따로 있는 이유는?
// 함수의 반환값 타입을 undefined라고 하면 return undefined;나 return; 해줘야 함.
// null 타입이라면 return null; 해줘야 함.
// 반환값이 아예 없으려면 undefined나 null 이외의 타입이 필요함. -> void
function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1; // 어떤 값도 담을 수 없고 (tsconfig.json에서 "strictNullChecks": false로 하면 가능)
a = undefined; // undefined만 담을 수 있다.

// never 타입
// 존재하지 않는, 불가능한 타입
function func3(): never {
  // 무한 루프 -> 절대 종료되지 않음 -> 반환값이 있다는 것 자체가 "모순"
  while (true) {}
}

function func4(): never {
  throw new Error(); // 실행되면 바로 중지됨 -> 반환값이 있다는 것 자체가 "모순"
}

let b: never;
// b = undefined; // 불가
// b = null; // 불가

let anyVar: any;
// b = anyVar; // any타입도 저장 불가
