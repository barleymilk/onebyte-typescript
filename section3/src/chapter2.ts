// unknown 타입 (전체 집합)
function unknownExam() {
  // 모든 타입이 unknown으로 업캐스팅 가능 (반대는 안 됨)
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // let num: number = unknown; // 다운캐스팅 불가
  // let str: string = unknown; // 다운캐스팅 불가
  // let bool: boolean = unknown; // 다운캐스팅 불가
}

// never 타입: 불가능, 모순
// 모든 타입의 서브 타입 (공집합: 아무 것도 없음)
// 모든 타입으로 업케스팅 가능
// 그 어떤 값도 넣을 수 없게 할 때 쓰자.
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 그 어떤 타입의 변수에도 값을 넣을 수 있다.(업케스팅!)
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10; // 다운캐스팅 불가
  // let never2: never = "string"; // 다운캐스팅 불가
  // let never3: never = true; // 다운캐스팅 불가
}

// void 타입
// undefined 타입의 슈퍼 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    // return undefined; // undefined를 return해도 문제 되지 않음
  }

  let voidVar: void = undefined; // 가능
}

// any 타입
// 치트키 타입 -> 타입계층도 무시
// 모든 타입의 슈퍼 타입이기도 하고
// 서브 타입이기도 하다.(never 빼고)
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // unknown이 any로 다운캐스팅 가능!
  undefinedVar = anyVar; // 다운캐스팅 가능!

  // neverVar = anyVar; // never는 순수한 공집합이고, 어떤 값도 가질 수 없다 -> 오류
}
