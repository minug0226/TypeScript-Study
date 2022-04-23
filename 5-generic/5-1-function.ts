{
  // 요소가 return 될수도 있고 null이 return 될수도 있는거라서 이렇게 확인하는 함수를 만들면 좋다.

  // 이렇게 되면 다른 타입은 어떻게 적용하지?
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 이러면 Type이 보장되지 않음..
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  // 함수에서 generic 사용하는법
  // 통상적인 일괄적인 포용하는 이런뜻을 가지고있다.
  // <>안에 generic을 지정해주면 된다 (표현은 자유롭게 할수있는듯하다.)
  // 사용하는 타입이 어떤 타입인지 정의할 수있다.
  // 이렇게 유연하지만 Type을 보장받을 수 있다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
