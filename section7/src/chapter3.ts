/*
*제네릭 인터페이스
- 하나의 인터페이스로 다양한 타입의 객체를 표현 가능
*/

// K, V -> 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 * 프로퍼티의 키와 value의 타입에 관련된 이 규칙만 만족하면 어떤 객체든 허용하는 아주 유연한 객체 타입을 ㅏㅁㄴ드는 문법
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};
let booleanMap: Map<boolean> = {
  key: true,
};

/*
 *제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/*
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

/* 제네릭 인터페이스를 이용하면 따로 타입 좁히기 코드를 쓰지 않아도 됨 */
// interface User {
//   name: string;
//   profile: Student | Developer;
// }
interface User<T> {
  name: string;
  profile: T;
}

// function goToSchool(user: User) {
function goToSchool(user: User<Student>) {
  // if (user.profile.type !== "student") {
  //   console.log("잘못 오셨습니다");
  //   return;
  // }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

// const developerUser: User = {
const developerUser: User<Developer> = {
  name: "김해연",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

// const studentUser: User = {
const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};
