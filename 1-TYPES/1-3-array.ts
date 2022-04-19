{
  // Array
  // 2가지 방식이 존재
  // 1번째 방법
  const fruits: string[] = ["🍓", "🍌"]; //  string에 배열
  // 2번째 방법
  const scroes: Array<number> = [1, 3, 4]; // 혹은 숫자를 가지고 있는 배열로 표현도 가능.

  // readonly를 사용하면 절대절대 변경할 수 없는 상태가 된다. 읽을 수만 있음.
  // readonly를 사용하기 위해서는 1번째 방법이 유리하다는 것을 알 수가 있다.
  function printArray(fruits: readonly string[]) {}
  // 2번째 방식으로는 readonly가 아직 허용되지 않는 방식이라고 한다.
  function printArray2(fruits: readonly Array<string>) {}

  // Tuple 💩
  // 배열이긴 배열인데 서로 다른 타입을 함께 가질 수 있는 배열이다.
  // Tuple을 사용하는것은 권장 하지 않는다고 한다.
  // 1. 데이터에 접근할 때 인덱스처럼 접근하는게 가독성이 너무 떨어진다.

  // Tuple 대신에 object 형태로 또는 class형태로 대신 사용하면 조금 더 명시해서 접근할 수 있는데 굳이 Tuple..?
  // Tuple -> interface, type alias, class 로 대체해서 사용할 수 있다.
  // 내가 만약 무언가 동적으로 return 하는데 class나 interface로 묶기는 애매하고, 동적으로 관련있는 다른 타입을 묶어서 사용자가 정의해서 쓸때는 용이할 수는 있다.
  let student: [string, number]; // 첫번째 인자 타입은 무조건 string이고 두번째 인자 타입은 무조건 number타입인 배열이다를 명시해줌.
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // 이렇게 안좋은 가독성을 나아지게 하는 방법이 존재하긴한다.
  // 다시 이렇게 할당하게 되면 0 은 name으로 1은 age로 할당하게 된다.
  // 그래도 여전히 데이터가 여전히 정해진것이 아니라 임의로 name, age로 만들어서 주는게 맞다고는 안보인다.
  const [name, age] = student;
}
