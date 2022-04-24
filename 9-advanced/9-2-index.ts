{
  // index 타입에 대한 공부

  const obj = {
    name: "wook",
  };
  obj.name; // wook
  obj["name"]; // wook

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  // 동물에 있는 name의 Type을 Name에다가 할당해준것.
  type Name = Animal["name"]; // string
  // 이렇게 쓸수있다. string 타입이 되었으니까.
  const text: Name = "hello";

  // 이런 union 타입을 가지게 되는것 gender: male | female
  type Gender = Animal["gender"]; //'male' | 'female'

  // Animal에 있는 모든 key의 Type을 keys에 할당하는것을 말함 (keyof)
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  // 문자열 union이 할당되었다.
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "wook",
    gender: "male",
  };
}
