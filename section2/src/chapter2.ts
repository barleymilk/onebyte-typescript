// 배열
// 방법 1
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];
// 방법 2
let boolArr: Array<boolean> = [true, false, true];
// <> 꺽쇠를 열고 다른 타입을 넣는 문법 -> 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2]; // 두 개의 요소를 담고, 첫 번째 요소 number, 두 번째 요소 number
// 튜플 길이를 넘어서는 배열 못 넣고, 다른 타입 요소도 넣을 수 없다.
// 순서 바꿔도 안 됨.

let tup2: [number, string, boolean] = [1, "2", true];

// 배열 메소드를 쓸 때는 오류가 발생하지 않음
// 튜플이 사실상 배열이기 때문.
// 따라서 각별히 주의해서 사용해야 함.
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

// 튜플을 언제 사용할까?
// 인덱스 별로 다른 값을 넣어야 할 때 위치가 헷갈릴 수 있음.
// 이 때 튜플을 쓰자.
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "최아무개"], // 오우... 안됨..
];
