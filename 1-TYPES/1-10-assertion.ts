{
  /**
   * 이건 썩 좋지 않은 타입이다...이걸 피할 수 있다면 피하자.
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  // any 타입임에도 불구하고 문자열 API를 사용하고싶을때
  const result = jsStrFunc();
  // 난 이 result라는 것을 string처럼 사용할거야 하면서 써주면 가능하다.
  // 근데 이걸 문자열이 아니라 number로 바꿔버리면 에러가 떠야하는데 에러가 뜨지않는다.
  // 그래서 Assertions 굳이 써야겠다고 생각이 들면 정말 확실할 수 있을때만 쓰자.
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  // 이건 무조건 숫자를 가지고있는 배열이여~~하고 준것.
  // 이러면 자바스크립트랑 똑같음 에러를 안준다.
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  // numbers!. <- 이렇게 작성하면 무조건 확실하다고 말해주는것...이건 null이 아니야! 하는것..
  // 너무 이렇게 장담을 해버리면 실시간으로 무너져내린다.
  const numbers = findNumbers()!;
  numbers.push(2); // 😱
  // 나는 저렇게 안쓴다고 막 무시할순있는데, 많이 쓰는 querySelector 예시를 보자.
  const button = document.querySelector("class")!;
  // 이런식으로 우리도 쓸 수도 있기에 피하자 잘 피하자!
  if (button) {
    button.nodeValue;
  }
}
