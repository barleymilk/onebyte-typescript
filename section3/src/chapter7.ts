// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  console.log(value); // value 타입이 union 타입으로 추론
  if (typeof value === "number") {
    console.log(value.toFixed()); // value 타입이 number 타입으로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value 타입이 string으로 추론
  } else if (value instanceof Date) {
    // typeof value === "object" // 별로 좋은 방법은 아님. null값도 object로 보기 때문
    // value instanceof Date: 왼쪽 값이 오른쪽 클래스의 인스턴스인가?
    // 별로 좋은 방법은 아님. null값도 object로 보기 때문
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value instanceof Person
    // Person은 클래스가 아니다. 타입별칭으로 만든 일종의 객체 타입. 따라서 instanceof은 사용 X
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
