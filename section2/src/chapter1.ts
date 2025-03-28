// number
// : number -> 타입 주석(annotation)
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// tsconfig.json -> "strictNullChecks": false
// null값을 다른 타입에 할당할 수 있음.
// let numA: number = null;

// 리터럴 타입
// 값 그 자체가 타입이 된다.
// 다른 값을 넣을 수 없다.
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
