/*
함수 오버로딩
- 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법

[ C 예시 ]
void function() {printf("매개변수 없음")}
void function(int a) {printf(a + 20)}
void function(int i, int j) {printf(i + j)}

- 함수 오버로딩은 자바스크립트에서는 지원되지 않고 타입스크립트에서 지원된다.

-> 하나의 함수 func
-> 모든 매개변수의 타입 number
-> Ver 1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
-> Ver 2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
*/

// 버전들을 명시 -> 선언식만 씀 -> "오버로드 시그니처"
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> "구현 시그니처"
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); // 오류
func(1);
// func(1, 2); // 오류
func(1, 2, 3);
