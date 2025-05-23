/* 
함수 타입 정의 
*/

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  // 반환값 타입은 자동으로 추론하기 때문에 생략 가능함.
  return a + b;
}

/*
화살표 함수의 타입을 정의하는 방법 
*/
const add = (a: number, b: number): number => a + b;

/*
함수의 매개변수 
*/
function introduce(name = "이정환", age: number, tall?: number) {
  // 필수 매개변수가 선택 매개변수보다 앞에 위치해야 한다.
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    // undefined인 경우를 제외
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("이정환", 27, 175);
introduce("이정환", 27);
// name : 이정환
// tall : 185
// name : 이정환

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

console.log(getSum(1, 2, 3)); // 6
console.log(getSum(1, 2, 3, 4, 5)); // 15
