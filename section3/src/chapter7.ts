// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법

// value => number : toFixed
// value => string : toUpperCase
function func(value: number | string) {
  console.log(value); // value 타입이 union 타입으로 추론
  if (typeof value === "number") {
    console.log(value.toFixed()); // value 타입이 number 타입으로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value 타입이 string으로 추론
  }
}
