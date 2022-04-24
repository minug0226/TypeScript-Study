{
  // condition 타입에 대해서 공부했다.

  // T 타입이 string을 상속한다면 boolean 타입을 주고 아니면 number 타입을 준다.
  type Check<T> = T extends string ? boolean : number;
  type Type = Check<string>; // boolean

  // 전달된 Type이 string을 상속하면
  type TypeName<T> = T extends string
    ? "string"
    : T extends number // 전달된 Type이 number 상속하면
    ? "number"
    : T extends boolean // 전달된 Type이 boolean 상속하면
    ? "boolean"
    : T extends undefined // 전달된 Type이 undefined 상속하면
    ? "undefined"
    : T extends Function // 전달된 Type이 Function 상속하면
    ? "function"
    : "object";

  type T0 = TypeName<string>;
  ("string");
  type T1 = TypeName<"a">;
  ("string");
  type T2 = TypeName<() => void>;
  ("function");
}
