// 타입 추론

// 일반적인 변수 선언, 초기화 -> 자동 추론
let a = 10;
// a = "hello"; // 자동으로 변수의 타입을 number로 추론하고 있어서 오류가 남
let b = "hello";

// 이러한 복잡한 구조도 타입 추론이 잘 된다.
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

// 구조분해할당 상황에서도 타입 추론 O
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

// 함수의 반환값 타입도 추론
// 매개변수에 기본값이 설정되어 있다면, 기본값을 기준으로 타입 추론
function func(message = "hello") {
  return "hello";
}

// 모든 상황에서 타입을 잘 추론하지는 않는다.
// 매개변수는 타입 추론할 수 없다.
// function func(param) {}

// any 타입의 진화!!
// 명시적으로 any타입을 정하는 것과는 다름.
// 중간에 실수로 잘못 진화할 수도 있고, 다른 사람이 짠 코드라면 타입을 알아맞춰야 하는 경우가 생길 수 있다.
// 따라서 암묵적 any 타입은 추천하는 방식은 아니다.
let d; // 암묵적 any 타입으로 추론 => 들어가는 값에 따라 진화한다.
d = 10;
d.toFixed(); // number 타입으로 진화
// d.toUpperCase(); // number 타입으로 바뀐 것처럼 오류가 남.

d = "hello"; // string 타입으로 진화
d.toUpperCase(); // 문자열 메소드 사용 가능
// d.toFixed(); // 오류

// number가 아니라 number literal 타입으로 추론됨
// const로 선언하면 어차피 상수이기 때문에, 10 이외에 다른 값을 담을 일이 없다.
const num = 10;
const str = "hello"; // string literal 타입 추론

// 모든 요소의 값을 고려해서 타입 추론함.
let arr = [1, "string"]; // (string | number)[] 유니온 타입 추론

// 타입 넓히기
// const a = 10; => let a = 10;
// 조금 더 범용적으로 타입을 추론하게 하는 것을 타입 넓히기라고 한다.
