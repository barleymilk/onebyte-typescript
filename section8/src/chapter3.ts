/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// 맵드 타입 문법
type PartialUser = {
  // [key in "id" | "name" | "age"]: User[key];
  [key in "id" | "name" | "age"]?: User[key]; // '?'를 붙이면 모든 프로퍼티가 선택적 프로퍼티가 됨.
};

type BooleanUser = {
  // [key in "id" | "name" | "age"]: boolean;
  [key in keyof User]: boolean;
};

type readonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ...기능
  return {
    id: 1,
    name: "홍길동",
    age: 30,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ...수정하는 기능
}

updateUser({
  // id: 1,
  // name: "홍길동",
  age: 25,
});
