/*
 * 제네릭
 */

// any 타입 -> 숫자에 toUpperCase()와 같은 메소드를 써도 오류가 안 난다.

// unknown 타입 -> unknown 타입에는 toUpperCase를 쓸 수 없다고 오류를 알려줌.
// 하지만 toFixed() 메서드를 못 쓴다.
// unknown은 어떤 연산, 어떤 메소드도 쓸 수 없기 때문이다.
// if (typeof num === "number") 처럼 조건문을 사용해서 사용해야 한다.

// 그냥 boolean을 넣으면 boolean, srting이면 string으로 못 할까?

// 제네릭 함수를 씁시다!
// generic: 일반적인, 포괄적인
// 일반적인 함수? 포괄적인 함수?
// 종합 병원(general hospital)
// 제네릭 함수: 두루두루 모두 다루는 함수

// <T> -> 타입을 저장하는 변수 : 타입 변수
function func<T>(value: T): T {
  return value;
}

let num = func(10); // number 타입
let bool = func(true); // bool 타입
let str = func("string"); // string 타입

let arr1 = func([1, 2, 3]); // number[] 타입
let arr2 = func<[number, number, number]>([1, 2, 3]); // [number, number, number] 튜플 타입
