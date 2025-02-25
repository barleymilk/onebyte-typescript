// number
// : number -> 타입 주석(annotation)
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// string
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// tsconfig.json -> "strictNullChecks": false
// null값을 다른 타입에 할당할 수 있음.
// let numA: number = null;
// 리터럴 타입
// 값 그 자체가 타입이 된다.
// 다른 값을 넣을 수 없다.
let numA = 10;
let strA = "hello";
let boolA = true;
export {};
