// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 컴파일 결과 사라지지 않는다.

// 기본으로 0부터 시작
// 첫 번째 값에 10 할당하면 자동으로 10, 11, 12, ... 값이 할당됨
// 두 번째 값에 10 할당하면 0, 10, 11, ... 값이 할당됨
// 숫자형 enum!
enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0 -> 관리자
  language: Language.korean,
};
const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 -> 일반 유저
};
const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 -> 게스트
};

console.log(user1, user2, user3); // { name: '이정환', role: 0, language: 'ko' } { name: '홍길동', role: 10 } { name: '아무개', role: 11 }
