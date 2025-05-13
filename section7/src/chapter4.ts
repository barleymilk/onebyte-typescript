/*
 *제네릭 클래스
 */

// number 타입 배열만 전달 가능
// class NumberList {
//   constructor(private list: number[]) {}

//   push(data: number) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print(); // [ 1, 2, 4 ]

const stringList = new List(["1", "2", "3"]);
stringList.push("hello");
stringList.print(); // [ '1', '2', '3', 'hello' ]
