/*
인터페이스 확장
*/

interface Animal {
  name: string;
  age: number;
}

// extends: 확장하다.
// interface Dog는 interface Animal을 확장하는 타입이다.
// 상속이라고도 함.
interface Dog extends Animal {
  // name: "hello"; // 다시 한 번 스트링 리터럴 타입으로 정의할 수 있음.
  // 재정의하려는 타입이 원본 타입의 서브타입이어야 한다.
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 0,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};
