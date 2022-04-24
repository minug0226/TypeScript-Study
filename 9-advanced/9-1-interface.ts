{
  // Type Alias와 interface 둘중 뭘 써야할까?
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  // 둘다 오브젝트를 만들 수 있다.
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  // 둘다 클래스에서 구현이 가능하다.
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends
  // 둘다 확장이 가능하다.
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // 인터페이스로만 병합이 가능하다.
  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // 타입은 안된다.
  // type PositionType {
  // }

  // 타입은 유연한 타입을 만들 수 있다. 인터페이스로는 불가능
  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}
