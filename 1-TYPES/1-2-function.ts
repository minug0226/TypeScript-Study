{
  // JavaScript 💩
  // 1. 함수가 짧은 경우 어떤 값을 전달해줘야 하는지 알 수 있지만
  // 2. 함수가 긴 경우에는 어떤 값을 전달해야할지 모를때가 있다.
  // 3. num1, num2의 타입을 string으로 줘도 함수가 실행이 되는데 그 문자열 두 개를 이어주는게 원했던 동작이 아니다.

  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeSciprt ✨
  // 1. 이렇게 되면 num1 과 num2 에는 number타입으로만 넣을 수 있게 된다.
  // 2. 그리고 숫자를 리턴하는것
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  // 1. 이번에는 무언가를 fectch를 해서 어떤 코드가 발생하다가 promise를 리턴하는 함수이다.
  // 2. 이제 여기에 굉장히 많은 함수들이 있다면 이 함수가 도대체 어떤걸 리턴하는거지 하고 스크롤링을 해서 밑에 부분까지 다 확인을 해 봐야한다.
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // TypeSciprt ✨
  // 1. id는 함수안에 내부 구현 사항이 없기 때문에 아무 타입이나 줄 수가 있다.(그렇지만 보통 id는 string으로 많이 쓴다)
  // 2. 딱 보자마자 스크롤링이 필요가 없다. -> 아 tsFetchNum은 숫자를 fetch하는 함수구나, 인자로는 string의 id를 받아서 promise를 리턴하는데 그 promise는 숫자의 데이터를 리턴하겠구나.
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
}   
