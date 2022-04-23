// constrains!
// generic에 조건을 주는 방법이다.

// 직원이라는 인터페이스를 만들어보았다.
interface Employee {
  pay(): void;
}

// 풀타임
class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}
// 파트타임
class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 자동으로 월급을 주는 함수를 제작
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 이것이 진짜 근본 너무 좋은 generic 코드다.
// 어떤 타입이든 들어올 수 있기 때문에 조건을 달아주면 된다.
// extends Employee를 넣어줘서 조건을 준것.
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const wook = new FullTimeEmployee();
const bob = new PartTimeEmployee();
wook.workFullTime();
bob.workPartTime();

const wookAfterPay = pay(wook);
const bobAfterPay = pay(bob);

const obj = {
  name: "wook",
  age: 25,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // wook
console.log(getValue(obj, "age")); // 25
console.log(getValue(obj2, "animal")); // 🐕

// 상속을 해준다.
// keyof 어떤임의의 타입 -> 그 오브젝트 안에 들어있는 키의 타입을 말함.
// 타입을 보장해야하기 때문에 리턴되는 값은 T에 K의 벨류가 리턴되게끔.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
