/*
 *인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// implements: 구현하다
// Character 클래스는 CharacterInterface를 구현한다.
// CharacterInterface: 설계도

// 인터페이스는 무조건 퍼블릭 필드만 정의할 수 있다.
// 필드나 생성자 안에서 private나 protected 접근 제어자 설정 불가능

// 인터페이스를 설계하고 클래스를 구현하는 일은 잘 없다.
// 다만 어떤 라이브러리의 구현이나 굉장히 복잡하고 정교한 프로그래밍을 해야 된다거나 할 때는
// 인터페이스를 이용해서 설계도를 구현하는 과정도 존재할 수 있다.
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string // private가 필요하다면 인터페이스에서 정의하지 말고 이런 식으로 따로 정의한다.
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
