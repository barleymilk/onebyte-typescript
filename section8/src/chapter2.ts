/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }
type Person = typeof person; // 자동 추론

// 유니온을 쓰는건 문제가 될 수 있음.
// 객체의 프로퍼티가 매우 많으면 모든 프로퍼티의 키들을 다 유니온으로 붙이기엔 비효율적.
// 새로운 프로퍼티가 추가되거나 수정되면 계속 수정해줘야 함.
// function getPropertyKey(person: Person, key: "name" | "age") {
// 이때, keyof 연산자를 쓰자
// keyof Person -> Person 객체의 모든 키를 유니온 타입으로 추출한다.
// function getPropertyKey(person: Person, key: keyof Person) {
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

// const person: Person = {
const person = {
  name: "홍길동",
  age: 30,
};

getPropertyKey(person, "name"); // 홍길동

// typeof person === "object";
