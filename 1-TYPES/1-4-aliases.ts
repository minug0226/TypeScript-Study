{
  // typescript의 꽃 🌺
  /**
   * Type Aliases
   */
  // 원하는 타입을 새롭게 정의 할 수 있다는 것!
  // 원시타입
  type Text = string;
  const name: Text = "wook";
  const address: Text = "korea";
  type Num = number;
  // 오브젝트 형식으로도 정의 할 수 있다.
  // name, age를 데이터로 가진 student Type이다.
  type student = { name: string; age: number };
  const student: student = {
    animal: "dog", // error
    name: "minwook",
    age: 25,
  };

  /**
   * String Literal Types
   */
  // 타입을 문자열로 지정할 수 있다.
  // 이렇게 지정하게 되면 무조건 지정해놓은 문자열만을 값으로 줘야한다.
  type Name = "name";
  let minwookName: Name;
  minwookName = "d"; // error
  minwookName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
