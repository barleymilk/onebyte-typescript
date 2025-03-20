/*
 * 클래스
 */

let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  intruduce() {
    console.log("안녕하세요!");
  },
};

// let studentB = {
//   name: "홍길동",
//   grade: "B-",
//   age: 30,
//   study() {
//     console.log("열심히 공부 함");
//   },
//   intruduce() {
//     console.log("안녕하세요!");
//   },
// };

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자: 실제로 객체를 만드는 메서드
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("홍길동", "B-", 30);
console.log(studentB); // Student { name: '홍길동', grade: 'B-', age: 30 }
studentB.study(); // 열심히 공부 함
studentB.introduce(); // 안녕하세요! 홍길동입니다.

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 부모인 Super 클래스의 생성자가 호출됨
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함.`);
  }
}

const studentDeveloper = new StudentDeveloper("김예리", "B+", 34, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
