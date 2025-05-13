/*
 *첫 번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/*
 * 두 번째 사례
 */

// 타입은 unknown이 아니라 unknown 배열이야!
// function returnFirstValue<T>(data: T[]) {
// 튜플 타입으로 해부자
// 첫 번째 요소 말고는 알 필요가 없음
// 나머지는 배열로 여러 개 들어올 것 같고, 그것들의 타입은 모르겠다(unknown)
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([0, "Hello", "mynameis"]); // number 타입

/*
 * 세 번째 사례
 */

// function getLength(data: any) {
// number 타입의 값을 가지는 length 프로퍼티가 있는 것으로 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10); // length가 없어도 오류가 나지 않음 -> extends로 타입을 제한해주면 오류가 나게 됨.
