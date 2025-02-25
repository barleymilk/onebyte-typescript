// object
// "이 값이 객체다"라는 것 빼고 아무런 정보가 없음.
// let user: object = {

// object라고 정의하면 id 프로퍼티가 없다고 뜸.
// user.id; // 오류 발생

// 객체 리터럴타입
// 구조를 기준으로 타입 정의 -> 구조적 타입 시스템 -> Property Based Type System
// (+ 이름 기준 타입 정의 -> 명목적 타입 시스템)
// ?: -> 선택적 프로퍼티 (Optional Property)
let user: { id?: number; name: string } = {
  id: 1,
  name: "이정환",
};

let dog: { name: string; color: string } = { name: "돌돌이", color: "brown" };

// property의 값 일부를 아직 모르는 경우
user = {
  name: "홍길동",
};

// readonly -> 프로퍼티의 값을 변경하지 못하게 함
let config: { readonly apiKey: string } = {
  apiKey: "MY API KEY",
};
// config.apiKey = "hacked"; // 오류
