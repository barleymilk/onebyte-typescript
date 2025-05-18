/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */

// string이 들어오면 number, number가 들어오면 string
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

// function removeSpaces(text: string) {
// function removeSpaces(text: string | undefined | null) {
// function removeSpaces<T>(text: T): T extends string ? string : undefined {
function removeSpaces<T>(text: T): T extends string ? string : undefined; // 오버로드 시그니처
function removeSpaces(text: any) {
  if (typeof text === "string") {
    // return text.replaceAll(" ", "") as any;
    return text.replaceAll(" ", "");
  } else {
    return undefined;
    // return undefined as any;
  }
}

// let result = removeSpaces("hi im winterlood") as string; // string
let result = removeSpaces("hi im winterlood"); // string
result.toUpperCase();

let result2 = removeSpaces(undefined);
