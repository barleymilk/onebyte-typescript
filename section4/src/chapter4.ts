/*
사용자 정의 타입가드 
*/

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 함수가 true이면 Dog 타입으로 추론하도록 만듦
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined; // as : 타입 단언
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
  } else if (isCat(animal)) {
    // 고양이
  }
}
