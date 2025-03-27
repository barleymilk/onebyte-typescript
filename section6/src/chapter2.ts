/**
 * 접근 제어자
 * access modifier
 * 클래스에서 특정 필드나 메소드에 접근할 수 있는 범위를 설정하는 문법
 * public, private, protected
 */

// public : 아무 제약이 없는 상태
// private : 클래스 외부에서 점표기법으로 프로퍼티에 접근이 불가능(read도 안 됨), 메서드 안에서만 접근 가능
// protected : 클래스 외부에서 접근 불가, 파생 클래스 내부에서는 접근 가능
class Employee {
  // 필드 -> 생성자에서 접근 제어자를 달았을 경우 필드 생략하자
  // private name: string;
  // protected age: number;
  // public position: string;

  // 생성자에도 접근 제어자를 달아줄 수 있음
  // -> 자동으로 필드를 만들기 때문에 생성자에 접근 제어자를 달면 필드를 적어줄 필요가 없다.
  // -> 자동으로 초기값 설정도 하기 때문에 아래 코드를 생략해도 된다.
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`); // 클래스 내부에서 private 접근 가능
  }
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동"; // private라서 클래스 외부에서 접근 불가
// employee.age = 30; // protected라서 클래스 외부에서 접근 불가
employee.position = "디자이너";

console.log(employee);
employee.work();

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name; // name이 private이어서 Employee 클래스에서만 접근 가능 -> 파생 클래스에서도 접근 불가
    this.age; // protected는 파생 클래스에서 접근 가능
  }
}
